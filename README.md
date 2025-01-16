# Solana Commands for SPL
# Create Account start wtih
   solana-keygen grind --starts-with nas:1 --num-threads 32
# Set Keypairs
      solana config set --keypair nas8Pj1KVCP8SbLgiAwAugLWh1gpGBFKNSSwniRooQf.json
# Set Development Environment to Devnet and check
      solana config set --url devnet
      solana config get