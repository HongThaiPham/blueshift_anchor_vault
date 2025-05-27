use anchor_lang::prelude::*;

declare_id!("8bSWmYxJujUJyEBLHxJxQyZ3XGBr37RDGe2HzRqcMdX9");

#[program]
pub mod blueshift_anchor_vault {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
