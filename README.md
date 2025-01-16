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

 # Account PDA to Mint Token
    spl-token create-account mntHEK9CmnYDWDRFF3FKqqXF9JhbZFqddcPmPAJ86iy
    Creating account FDoNhYj4fsE4mvZd4K9biDsmksZG7LahHYeTsZcKLdA3

Signature: 3VQ3mcKnf9UH1nY1VsCg9yx6tf6YszBbmY6yoRqdZqgW9PcaicHF6aGVm1WxTCktaTo3Qs69T2UstXxornQyEEVw

# Mint SPL Token 
    spl-token mint mntHEK9CmnYDWDRFF3FKqqXF9JhbZFqddcPmPAJ86iy 1000
    Minting 1000 tokens
    Token: mntHEK9CmnYDWDRFF3FKqqXF9JhbZFqddcPmPAJ86iy
    Recipient: FDoNhYj4fsE4mvZd4K9biDsmksZG7LahHYeTsZcKLdA3

    Signature: tB7zFobE38eQRmx7Y6G35YH33NdDW7HkX1vNHExpXSDrc1VP5VXZs5GHD83Y6tAzaVmkmogY8NKETzWnS3ERVaB