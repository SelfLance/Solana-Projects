import { findMetadataPda, mplTokenMetadata, verifyCollectionV1 } from "@metaplex-foundation/mpl-token-metadata";

import { airdropIfRequired, getExplorerLink, getKeypairFromFile } from "@solana-developers/helpers"

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"

import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js"
import { keypairIdentity, publicKey } from "@metaplex-foundation/umi";

const connection = new Connection(clusterApiUrl("devnet"));

const user = await getKeypairFromFile();

await airdropIfRequired(
    connection,
    user.publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
)
console.log("Loaded User: ", user.publicKey.toBase58())

const umi = createUmi(connection.rpcEndpoint)
umi.use(mplTokenMetadata())
const umiUser = umi.eddsa.createKeypairFromSecretKey(user.secretKey);
umi.use(keypairIdentity(umiUser))

console.log("Set up umi instance for user")
const collectionAddress = publicKey("2dpwt3BbxU31R138xfpm8L61dxjrxgtHUw5MUhhAEXGK")
const nftAddress = publicKey("Cr2aWQe4AeJGmfTMH7SYJahFayGXtJi2YE84rvMmBdcG")

const transaction = await verifyCollectionV1(umi, {
    metadata: findMetadataPda(umi, { mint: nftAddress }),
    collectionMint: collectionAddress,
    authority: umi.identity
})

transaction.sendAndConfirm(umi)
console.log(`✅ NFT ${nftAddress} verify as member of collection  ${collectionAddress}! see explorer at ${getExplorerLink("address", nftAddress, "devnet")}`);

