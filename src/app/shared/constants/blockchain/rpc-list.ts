import {
  BLOCKCHAIN_NAME,
  EvmBlockchainName,
  TronBlockchainName,
  SolanaBlockchainName,
  TonBlockchainName,
  BitcoinBlockchainName,
  SuiBlockchainName
} from '@cryptorubic/core';
import { TronWebProvider } from 'rubic-sdk';

export const rpcList: Record<EvmBlockchainName, string[]> &
  Record<TronBlockchainName, TronWebProvider[]> &
  Record<SolanaBlockchainName, string[]> &
  Record<TonBlockchainName, string[]> &
  Record<BitcoinBlockchainName, string[]> &
  Record<SuiBlockchainName, string[]> = {
  [BLOCKCHAIN_NAME.ETHEREUM]: [
    'https://rpc.ankr.com/eth/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
  ],
  [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: [
    'https://rpc.ankr.com/bsc/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
  ],
  [BLOCKCHAIN_NAME.POLYGON]: [
    'https://rpc.ankr.com/polygon/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://1rpc.io/matic',
  ],
  [BLOCKCHAIN_NAME.POLYGON_ZKEVM]: [
    'https://rpc.ankr.com/polygon_zkevm/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://zkevm-rpc.com',
    'https://1rpc.io/polygon/zkevm',
    'https://polygon-zkevm-mainnet.public.blastapi.io',
  ],
  [BLOCKCHAIN_NAME.HARMONY]: [
    'https://rpc.ankr.com/harmony/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://api.harmony.one',
    'https://api.s0.t.hmny.io/'
  ],
  [BLOCKCHAIN_NAME.AVALANCHE]: [
    'https://rpc.ankr.com/avalanche/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://1rpc.io/avax/c',
  ],
  [BLOCKCHAIN_NAME.MOONRIVER]: [
    'https://moonriver.public.blastapi.io',
    'https://moonriver.unitedbloc.com:2000',
    'https://moonriver-rpc.publicnode.com',
    'https://moonriver.api.onfinality.io/public',
  ],
  [BLOCKCHAIN_NAME.FANTOM]: [
    'https://fantom.api.onfinality.io/public',
    'https://1rpc.io/ftm',
  ],
  [BLOCKCHAIN_NAME.ARBITRUM]: [
    'https://rpc.ankr.com/arbitrum/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.ankr.com/arbitrum/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
  ],
  [BLOCKCHAIN_NAME.AURORA]: [
    'https://mainnet.aurora.dev',
  ],
  [BLOCKCHAIN_NAME.TELOS]: [
    'https://mainnet.telos.net/evm',
    'https://rpc1.eu.telos.net/evm',
    'https://rpc2.eu.telos.net/evm',
    'https://rpc1.us.telos.net/evm',
    'https://rpc1.us.telos.net/evm'
  ],
  [BLOCKCHAIN_NAME.OPTIMISM]: [
    'https://rpc.ankr.com/optimism/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
  ],
  [BLOCKCHAIN_NAME.CRONOS]: [
    'https://evm-cronos.crypto.org',
  ],
  [BLOCKCHAIN_NAME.OKE_X_CHAIN]: ['https://exchainrpc.okex.org'],
  [BLOCKCHAIN_NAME.GNOSIS]: [
    'https://rpc.ankr.com/gnosis/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
  ],
  [BLOCKCHAIN_NAME.FUSE]: [
    'https://fuse-pokt.nodies.app',
    'https://rpc.fuse.io',
  ],
  [BLOCKCHAIN_NAME.MOONBEAM]: [
    'https://rpc.ankr.com/moonbeam/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://moonbeam.publicnode.com',
    'https://1rpc.io/glmr',
  ],
  [BLOCKCHAIN_NAME.CELO]: [
    'https://rpc.ankr.com/celo/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6'
  ],
  [BLOCKCHAIN_NAME.BOBA]: [
    'https://mainnet.boba.network',
    'https://lightning-replica.boba.network'
  ],
  [BLOCKCHAIN_NAME.BOBA_BSC]: ['https://bnb.boba.network'],
  [BLOCKCHAIN_NAME.ASTAR_EVM]: [
    'https://evm.astar.network/',
    'https://astar.public.blastapi.io',
    'https://rpc.astar.network:8545',
  ],
  [BLOCKCHAIN_NAME.KAVA]: [
    'https://evm.kava.io',
  ],
  [BLOCKCHAIN_NAME.TRON]: [
    // {
    //   fullHost:
    //     'https://rpc.ankr.com/premium-http/tron/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6'
    // },
    // {
    //   fullHost: 'https://go.getblock.io/adeeade0e28e4b879ac4340637e0946d'
    // },
    {
      fullHost: 'https://api.trongrid.io'
    }
  ],
  [BLOCKCHAIN_NAME.BITGERT]: [
    'https://serverrpc.com',
    'https://dedicated.brisescan.com/',
    'https://rpc-bitgert-vefi.com',
    'https://rpc.icecreamswap.com',
    'https://mainnet-rpc.brisescan.com',
    'https://chainrpc.com'
  ],
  [BLOCKCHAIN_NAME.OASIS]: ['https://emerald.oasis.dev'],
  [BLOCKCHAIN_NAME.METIS]: [
    'https://rpc.ankr.com/metis/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://andromeda.metis.io/?owner=1088',
    'https://metis-mainnet.public.blastapi.io',
  ],
  [BLOCKCHAIN_NAME.DFK]: [
    'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc',
    'https://avax-dfk.gateway.pokt.network/v1/lb/6244818c00b9f0003ad1b619/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc'
  ],
  [BLOCKCHAIN_NAME.KLAYTN]: [
    'https://rpc.ankr.com/klaytn/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
  ],
  [BLOCKCHAIN_NAME.VELAS]: ['https://evmexplorer.velas.com/rpc', 'https://explorer.velas.com/rpc'],
  [BLOCKCHAIN_NAME.SYSCOIN]: [
    'https://rpc.ankr.com/syscoin/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.syscoin.org'
  ],
  [BLOCKCHAIN_NAME.ETHEREUM_CLASSIC]: [
    'https://besu-at.etc-network.info',
    'https://geth-at.etc-network.info'
  ],
  [BLOCKCHAIN_NAME.FLARE]: [
    'https://rpc.ankr.com/flare/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://flare.rpc.thirdweb.com',
    'https://flare-api.flare.network/ext/C/rpc'
  ],
  [BLOCKCHAIN_NAME.IOTEX]: ['https://pokt-api.iotex.io'],
  [BLOCKCHAIN_NAME.THETA]: ['https://eth-rpc-api.thetatoken.org/rpc'],
  // [BLOCKCHAIN_NAME.BITCOIN_CASH]: [
  //   'https://smartbch.greyh.at',
  //   'https://smartbch.fountainhead.cash/mainnet'
  // ],
  [BLOCKCHAIN_NAME.ZK_SYNC]: [
    'https://rpc.ankr.com/zksync_era/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://mainnet.era.zksync.io',
  ],
  [BLOCKCHAIN_NAME.PULSECHAIN]: ['https://rpc.pulsechain.com', 'https://pulsechain.publicnode.com'],
  [BLOCKCHAIN_NAME.LINEA]: [
    'https://rpc.ankr.com/linea/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://linea-mainnet.infura.io/v3/30f7c1536c48439b834bb59e7dfe7d71',
    'https://linea.drpc.org',
    'https://linea.blockpi.network/v1/rpc/public',
  ],
  [BLOCKCHAIN_NAME.BASE]: [
    'https://rpc.ankr.com/base/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://mainnet.base.org',
    'https://1rpc.io/base',
    'https://base.blockpi.network/v1/rpc/public',
    'https://base-mainnet.public.blastapi.io',
  ],
  [BLOCKCHAIN_NAME.MANTLE]: [
    'https://rpc.ankr.com/mantle/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://1rpc.io/mantle',
    'https://mantle-mainnet.public.blastapi.io',
    'https://mantle.publicnode.com',
  ],
  [BLOCKCHAIN_NAME.FUJI]: [
    'https://endpoints.omniatech.io/v1/avax/fuji/public',
    'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc'
  ],
  [BLOCKCHAIN_NAME.MUMBAI]: [
    'https://rpc-mumbai.maticvigil.com',
    'https://polygon-testnet.public.blastapi.io',
    'https://endpoints.omniatech.io/v1/matic/mumbai/public'
  ],
  [BLOCKCHAIN_NAME.GOERLI]: [
    'https://goerli.blockpi.network/v1/rpc/public',
    'https://eth-goerli.public.blastapi.io',
    'https://endpoints.omniatech.io/v1/eth/goerli/public'
  ],
  [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET]: [
    'https://data-seed-prebsc-1-s3.binance.org:8545',
    'https://endpoints.omniatech.io/v1/bsc/testnet/public',
    'https://bsc-testnet.public.blastapi.io'
  ],
  [BLOCKCHAIN_NAME.SCROLL_SEPOLIA]: ['https://sepolia-rpc.scroll.io/'],
  [BLOCKCHAIN_NAME.ARTHERA]: [],
  [BLOCKCHAIN_NAME.ZETACHAIN]: [
    'https://zetachain-evm.blockpi.network/v1/rpc/public',
    'https://zetachain.blockpi.network/rpc/v1/94eada401271d16a169b6661424ab4d6d1cefd37',
    'https://zetachain-mainnet-archive.allthatnode.com:8545',
  ],
  [BLOCKCHAIN_NAME.SEPOLIA]: ['https://l1rpc.jolnir.taiko.xyz'],
  [BLOCKCHAIN_NAME.MANTA_PACIFIC]: [
    'https://pacific-rpc.manta.network/http',
    'https://1rpc.io/manta',
  ],
  [BLOCKCHAIN_NAME.SCROLL]: [
    'https://rpc.ankr.com/scroll/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.scroll.io/',
    'https://1rpc.io/scroll',
  ],
  [BLOCKCHAIN_NAME.STARKNET]: [
    'https://rpc.starknet.lava.build',
    'https://starknet-mainnet.public.blastapi.io',
    'https://data.voyager.online/',
    'https://starknet-mainnet.s.chainbase.com/v1/2Z4bzrFJWgzsqK5mltnTKKtjEK4'
  ],
  [BLOCKCHAIN_NAME.SOLANA]: [
    'https://rpc.ankr.com/solana',
    'https://api.mainnet-beta.solana.com'
  ],
  [BLOCKCHAIN_NAME.BERACHAIN_TESTNET]: ['https://artio.rpc.berachain.com/'],
  [BLOCKCHAIN_NAME.BLAST_TESTNET]: [
    'https://rpc.ankr.com/blast_testnet_sepolia/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://sepolia.blast.io'
  ],
  [BLOCKCHAIN_NAME.BLAST]: [
    'https://rpc.ankr.com/blast/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.blast.io',
    'https://blast.din.dev/rpc',
    'https://blastl2-mainnet.public.blastapi.io',
    'https://blast.blockpi.network/v1/rpc/public',
  ],
  [BLOCKCHAIN_NAME.HOLESKY]: [
    'https://ethereum-holesky.publicnode.com',
    'https://1rpc.io/holesky',
    'https://holesky-rpc.nocturnode.tech'
  ],
  [BLOCKCHAIN_NAME.HORIZEN_EON]: [
    'https://rpc.ankr.com/horizen_eon/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://eon-rpc.horizenlabs.io/ethv1'
  ],
  [BLOCKCHAIN_NAME.MERLIN]: [
    'https://rpc.merlinchain.io',
    'https://merlin.blockpi.network/v1/rpc/public',
  ],
  [BLOCKCHAIN_NAME.ROOTSTOCK]: [
    'https://mycrypto.rsk.co',
  ],
  [BLOCKCHAIN_NAME.MODE]: [
    'https://mode-mainnet.blastapi.io/f2a2318c-ed4d-4366-9675-ccfd49434359',
    'https://mainnet.mode.network',
    'https://1rpc.io/mode',
    'https://mode.drpc.org',
  ],
  [BLOCKCHAIN_NAME.ZK_FAIR]: [
    'https://rpc.zkfair.io',
    'https://zkfair.blockpi.network/v1/rpc/public',
    'https://endpoints.omniatech.io/v1/zkfair/mainnet/public'
  ],
  [BLOCKCHAIN_NAME.ZK_LINK]: ['https://rpc.zklink.io', 'https://rpc.zklink.network'],
  [BLOCKCHAIN_NAME.XLAYER]: [
    'https://rpc.ankr.com/xlayer/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.xlayer.tech',
    'https://endpoints.omniatech.io/v1/xlayer/mainnet/public',
    'https://xlayerrpc.okx.com',
  ],
  [BLOCKCHAIN_NAME.TAIKO]: [
    'https://rpc.ankr.com/taiko/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.mainnet.taiko.xyz',
    'https://rpc.taiko.xyz',
  ],
  [BLOCKCHAIN_NAME.SEI]: [
    'https://evm-rpc.sei-apis.com',
  ],
  [BLOCKCHAIN_NAME.CORE]: [
    'https://rpc.ankr.com/core/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://1rpc.io/core',
    'https://core.public.infstones.com',
  ],
  [BLOCKCHAIN_NAME.BAHAMUT]: [
    'https://rpc.ankr.com/bahamut/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc1.bahamut.io',
    'https://rpc2.bahamut.io'
  ],
  [BLOCKCHAIN_NAME.TON]: [
    'https://go.getblock.io/fd91e4291b6847bf89e10df5f4ae98d8',
    'https://go.getblock.io/aad518fd572d490eb42c1d5f201ce1b7'
  ],
  [BLOCKCHAIN_NAME.BITLAYER]: [
    'https://rpc.ankr.com/bitlayer/6b6a71bf46dfc5203b73ec1955f59ace5e1bf4fe3b8bd6d90940d80f4b72a8a6',
    'https://rpc.bitlayer.org',
    'https://rpc-bitlayer.rockx.com',
    'https://rpc.bitlayer-rpc.com'
  ],
  [BLOCKCHAIN_NAME.GRAVITY]: ['https://1625.rpc.thirdweb.com', 'https://rpc.gravity.xyz'],
  [BLOCKCHAIN_NAME.UNICHAIN_SEPOLIA_TESTNET]: [
    'https://sepolia.unichain.org',
    'https://1301.rpc.thirdweb.com/'
  ],
  [BLOCKCHAIN_NAME.BITCOIN]: [''],
  [BLOCKCHAIN_NAME.FRAXTAL]: [
    'https://rpc.frax.com',
    'https://fraxtal-rpc.publicnode.com',
    'https://fraxtal.drpc.org',
  ],
  // [BLOCKCHAIN_NAME.SONIC]: ['https://rpc.soniclabs.com', 'https://sonic.drpc.org'],
  // [BLOCKCHAIN_NAME.SONEIUM_TESTNET]: ['https://rpc.minato.soneium.org/'],
  [BLOCKCHAIN_NAME.MORPH]: ['https://rpc-quicknode.morphl2.io', 'https://rpc.morphl2.io'],
  [BLOCKCHAIN_NAME.BERACHAIN]: [
    'https://rpc.berachain.com/',
  ],
  [BLOCKCHAIN_NAME.SUI]: ['https://fullnode.mainnet.sui.io:443'],
  [BLOCKCHAIN_NAME.SONEIUM]: [
    'https://1868.rpc.thirdweb.com/',
    'https://rpc.soneium.org/',
    'https://soneium.drpc.org',
  ],
  [BLOCKCHAIN_NAME.WANCHAIN]: [
    'https://gwan2-ssl.wandevs.org',
    'https://gwan-ssl.wandevs.org:56891'
  ],
  [BLOCKCHAIN_NAME.UNICHAIN]: [
    'https://mainnet.unichain.org/',
  ],
  [BLOCKCHAIN_NAME.HEMI]: ['https://rpc.hemi.network/rpc']
  // [BLOCKCHAIN_NAME.MONAD_TESTNET]: ['https://testnet-rpc.monad.xyz']
};
