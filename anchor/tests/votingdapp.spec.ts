import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair, PublicKey } from '@solana/web3.js'
import { Votingdapp } from '../target/types/votingdapp'
import { publicKey } from '@coral-xyz/anchor/dist/cjs/utils'
import { BankrunProvider, startAnchor } from 'anchor-bankrun'

const IDL = require("../target/idl/votingdapp.json")

const votingAddress = new PublicKey("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF");

describe('votingdapp', () => {

  it(`its initialized Voting program`, async function () {
    const context = await startAnchor("", [{ name: "votingDapp", programId: votingAddress }], []);
    const provider = new BankrunProvider(context)

    const votingProgram = new Program<Votingdapp>(
      IDL,
      provider
    )


    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      "Test Poll",
      new anchor.BN(Math.floor(Date.now() / 1000)),
      new anchor.BN(Math.floor(Date.now() / 1000) + 86400)
    ).rpc();
    const [pollAddress] = PublicKey.findProgramAddressSync([
      Buffer.from('poll'),
      new anchor.BN(1).toArrayLike(Buffer, 'le', 8)
    ]
      , votingAddress);

    const poll = await votingProgram.account.poll.fetch(pollAddress);
    console.log("Poll Address is ", poll)

  })

});
