# Solana Commands for SPL
# Create Account start wtih
   solana-keygen grind --starts-with nas:1 --num-threads 32
   solana-keygen grind --starts-with mnt:1 --num-threads 64
# Set Keypairs
      solana config set --keypair nas8Pj1KVCP8SbLgiAwAugLWh1gpGBFKNSSwniRooQf.json
# Set Development Environment to Devnet and check
      solana config set --url devnet
      solana config get

# Check Balance of Solana in account
    solana balance nas8Pj1KVCP8SbLgiAwAugLWh1gpGBFKNSSwniRooQf

# Create Token 
    spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb 
--enable-metadata mntHEK9CmnYDWDRFF3FKqqXF9JhbZFqddcPmPAJ86iy.json

Address:  mntHEK9CmnYDWDRFF3FKqqXF9JhbZFqddcPmPAJ86iy
Decimals:  9

Signature: 5eAKx9dUuNoTua7k6groF1YZrevMho3nojzU6t5Y9ShsWbGk3GfytvNUXhyRvk1rvuY6tgSNSK5KmdRbksmTrzvt

# URL of Metadata
https://raw.githubusercontent.com/SelfLance/Solana-Projects/refs/heads/spl-token/metadata.json

Upload Json file on Github then open file and click on raw to get link of specific file
# Update Metadata to show on explorer
 spl-token initialize-metadata mntHEK9CmnYDWDRFF3FKqqXF9JhbZFqddcPmPAJ86iy  "Juhlot Skardu Road" "JSR" https://raw.githubusercontent.com/SelfLance/Solana-Projects/refs/heads/spl-token/metadata.json