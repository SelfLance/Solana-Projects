use anchor_lang::prelude::*;

declare_id!("5s3PtT8kLYCv1WEp6dSh3T7EuF35Z6jSu5Cvx4hWG79H");

#[program]
pub mod voting {
    use super::*;

    pub fn create_journal_entry(ctx: Context<CreateEntry>, title: String) -> Result<()> {
        Ok(())  

    }
    
}

#[derive(Accounts)]
#[instruction(title: String)]  
pub struct CreateEntry<'info> {

    #[account (
        init,
        seeds =[title.as_bytes(), owner.key().as_ref()],
        bump,
        space = 8 + JournalEntryState::INIT_SPACE,
        payer = owner,
    )]
    pub journal_entry: Account<'info, JournalEntryState>,

    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,

}

#[account]
#[derive(InitSpace)]
pub struct JournalEntryState {
    pub owner: Pubkey,
    #[max_len(50)]
   pub title: String,
   #[max_len(1000)]
   pub message:String

}
