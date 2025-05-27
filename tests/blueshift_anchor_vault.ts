import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { BlueshiftAnchorVault } from "../target/types/blueshift_anchor_vault";

describe("blueshift_anchor_vault", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace
    .blueshiftAnchorVault as Program<BlueshiftAnchorVault>;
  const amount = new anchor.BN(1_000_000); // 1 million lamports
  it("can deposit", async () => {
    // Add your test here.
    const tx = await program.methods.deposit(amount).rpc();
    console.log("Your transaction signature", tx);
  });

  it("can withdraw", async () => {
    // Add your test here.
    const tx = await program.methods.withdraw().rpc();
    console.log("Your transaction signature", tx);
  });
});
