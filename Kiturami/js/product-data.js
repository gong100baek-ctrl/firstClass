// 귀뚜라미 제품 목록 (제품 상세 페이지 + 주문/결제 페이지 공용)
// 항목 형식: [제품명, 목록 썸네일, [상세 이미지...]]  (제품명/이미지는 krb.co.kr 제품 목록·상세 페이지 기준)
// 제품명/이미지는 krb.co.kr 제품 목록 기준입니다. 이미지가 "images/"로 시작하면 이 사이트의 파일, 아니면 krb.co.kr 이미지 경로입니다.
(() => {
    const KRB_IMG = "https://krb.co.kr/files/attach/images/";
    window.KITURAMI_IMG = (path) => (/^(images\/|https?:)/.test(path) ? path : KRB_IMG + path);
    window.KITURAMI_LINEUPS = {
        "gas-boiler": {
            eyebrow: "GAS BOILER LINEUP", title: "가스보일러 제품",
            items: [
                ["귀뚜라미보일러 AI 방방 난방 시스템", "images/gas_1.png", ["141/647/027/8944d1679c161da5484f18c8dc10704b.jpg", "141/647/027/c4c4a95dbc67f65f242ad268c8a43259.jpg"]],
                ["거꾸로 NEW 콘덴싱 P10 보일러", "images/gas_2.png", ["141/064/023/9f45ca36bab33e6e16c29f199bc5cd36.jpg", "141/064/023/a0729ca2a24c478c9a0a9e9c0ff80826.jpg", "141/064/023/d800cfc5b132572f7eaec2cf91cfeae9.jpg"]],
                ["거꾸로 NEW 콘덴싱 L10 보일러", "images/gas_3.png", ["141/987/020/6692389b38ef14aba190164ebc0cd488.jpg", "141/987/020/0b2404afe133a369d7fa7164436d7b1f.jpg", "141/987/020/c688afc56f28f848bdbd98e6db405c2a.jpg"]],
                ["거꾸로 ECO 콘덴싱 L20 보일러", "images/gas_4.png", ["141/306/025/4261467f2129db3e4afa47bb2456f5b5.jpg"]],
                ["거꾸로 ECO 콘덴싱 S20 보일러", "images/gas_5.png", ["141/538/025/fc8312bcbe95596710076af56234d878.jpg"]],
                ["거꾸로 ECO 콘덴싱 보일러", "images/gas_6.png", ["141/251/016/9cdb98cd1d7944ee4339611d4080bbb0.jpg"]],
                ["거꾸로 콘덴싱 프리미엄 가스보일러", "images/gas_7.png", ["141/428/8861decc5ce1911bf1c170c24ae46f0c.jpg"]],
                ["빌라형 거꾸로 콘덴싱 가스보일러", "images/gas_8.png", ["141/452/de4a66e05bda5ec90b13cc175c7b566c.jpg"]],
                ["트윈알파 eco L11 가스보일러", "images/gas_9.png", ["141/631/024/3675a619788ddb43c429be72e8cc8cbc.jpg", "141/631/024/4acbc2e2d883305c81f13b603ee5b211.jpg", "141/631/024/73e5e131f905685c6e9ee9f908c2bd5a.jpg"]],
                ["거꾸로 IN L10 가스보일러", "images/gas_10.png", ["141/799/022/d473d837f3069d5570f2d5a71344b456.jpg", "141/799/022/a621ce3b9af31a05ee0d9130f8b110a8.jpg", "141/799/022/80843c031c6436d653b933bb3870de8b.jpg"]]
            ]
        },
        "oil-boiler": {
            eyebrow: "OIL BOILER LINEUP", title: "기름보일러 제품",
            items: [
                ["스텐 하이핀 BLUE 기름보일러", "images/oil_1.png", ["524/443/018/0dbb6a9d885987316d1e3ada45d9dec9.png", "524/443/018/710d18ddf699356236abaab2ca5114ff.png", "524/443/018/342351e2283b16027fc3e655382aa219.png", "524/443/018/4b229ae408d9dda9ce702459b8e1a825.jpg"]],
                ["스텐 하이핀 eco 기름보일러", "images/oil_2.png", ["524/713/016/567a5d45d53bb03b59afab17fc23ff57.png", "524/713/016/951ea2d8c2147579a359ac13ebe599aa.png", "524/713/016/12988149ff4483bffebd3360d9237053.png", "524/713/016/c426f6a6256cc2cb87a8d120832c8e2d.jpg"]],
                ["터보 하이핀 eco 기름보일러", "images/oil_3.png", ["524/534/016/ecf70e5968a5a73eee60d54c9c84acc2.png", "524/534/016/0442d661ea74025c5dcea49a678d1057.png", "524/534/016/a51f5364a3431a78ae7ce30b56731cec.png", "524/534/016/47b1b5c185c822bcf68b8d9ca687114d.jpg"]],
                ["거꾸로 콘덴싱 eco 기름보일러", "images/oil_4.png", ["524/260/018/8f55dda46dc69565183aed14a6aa4e77.png", "524/260/018/41a389762fae6c898a352731cd721667.png", "524/260/018/4b2057e24f51385ef23034e640ca82b3.png", "524/260/018/f4afcd53676cff1012e6e00ac9064e85.jpg"]],
                ["스텐 하이핀 L10 기름보일러", "images/oil_5.png", ["524/490/023/c6ec60f4dc32af72ae21050ebd8022c0.png", "524/490/023/00a189294add1105064d1e6783d73628.png", "524/490/023/39bc7a2a3b4c3b98c009f651f04845ec.jpg"]],
                ["스텐 하이핀 N 기름보일러", "images/oil_6.png", ["524/925/019/7b0f2e790234285080522f74dcc5f92f.png", "524/925/019/3ab21bd7bf28c8b6f0dfbc591f8bb6c5.png", "524/925/019/54f74545b1f252f6b874b4d535a36a21.jpg"]]
            ]
        },
        "water-heater": {
            eyebrow: "WATER HEATER LINEUP", title: "온수기 제품",
            items: [
                ["저장식 전기온수기(스테인리스)", "556/911/026/776d1a65a7445149f2c6cc0f48b8cd84.png", ["556/911/026/2fc731f687f107bda5ff8857eec959aa.png", "556/911/026/6eafa372e6deb05a34da37e92e2fca75.png", "556/911/026/1a89de89f6cb174247d13ad171a838a6.png", "556/911/026/33de8eb654f7903520636dc30e3fa933.png", "556/911/026/0985acdf59d54c4ba60eec5254261db4.jpg"]],
                ["저장식 전기온수기 (법랑)", "556/766/5a231c4855fdba77e3a5242b4e3b3891.png", ["556/766/34aa8d9bd135f497756318e0cfce89db.png", "556/766/e2a93eb451a0873876a1612054e7438b.png", "556/766/c428a4cd065be8cfd4d3ee94bfc47fb0.png", "556/766/f3a1377ddb16bf01f3bed766a213724b.png", "556/766/e881e57ac724fe550df5c99f75524aff.jpg"]],
                ["심야 전기 온수기", "556/744/96c306271d20c671cad6e418239cef2b.png", ["556/744/8647cc034916189a8edb69349df991a9.png", "556/744/8e0edbba3b2fc988d7bf8c0b5e4c39a4.jpg"]],
                ["트윈알파 가스온수기", "556/935/021/49eb60d252864c4589073a4c6730e1d7.png", ["556/935/021/3362b37601d87cee55e60068aece38dd.png", "556/935/021/75608c6c7afe8d73e61af20dbb589f14.png", "556/935/021/dc6933054330571b5d608620400acb6e.jpg"]],
                ["중형 전기온수기", "556/485/025/60fdcb5590c007d9c0cc010713249412.png", ["556/485/025/f09c6626296079c6a288a30485e7f530.png", "556/485/025/8a0f8ce527179a978b76f0c17bbbaa3d.jpg"]]
            ]
        },
        "renewable": {
            eyebrow: "RENEWABLE / COMMERCIAL / ELECTRIC LINEUP", title: "신재생/중대형/전기 제품",
            items: [
                ["거꾸로 타는 화목보일러", "554/661/4fb42d9a69d35f130f23306f2348d31e.png", ["554/661/df91a1ab7b24b1cee5c99da580d7da9c.png", "554/661/f0654528a0860081f2ab3169a98a979b.png", "554/661/6d8709f8b801b9586583140bf5070d6c.jpg"]],
                ["화목보일러(일반형)", "554/615/1c7a89ec1bba8e10eb40ec6d78f07e4b.png", ["554/615/3f53aa7984398aa7f29f1bdfa9e6a2d0.png", "554/615/48fa4bba9ca6b4dff35eec56d2a127b1.png", "554/615/62bdd9d15a7198e7629ef4517268e36b.jpg", "554/615/02f4547393277efe52c8a4abb44eed18.png", "554/615/a1280d63d9a207e6b9b48fd4f71883c3.png"]],
                ["축열식 화목보일러", "554/642/e1d8f53787b6b7806b757def4d9985d9.png", ["554/642/c2d289174bb53129f98eed10f51a8bd5.png", "554/642/bb81330ce3a15a14bce6c0b14c15f6b3.jpg"]],
                ["하이브리드 화목보일러", "554/626/cc51d2b53d81c72ad42cc07a8a522bbc.png", ["554/626/2afe3bbde28694bc89bab2d980311bb9.png", "554/626/ac5694c2138245d79aa05020a4380577.jpg"]],
                ["가정용 펠릿보일러", "554/806/7d7b22d667705ab49f9b8f54c0eac78f.png", ["554/806/f7b024edcdc542bbd2ebc0474912c438.jpg", "554/806/e88acb59a3a3534b3b729769bba51e3e.png", "554/806/4daa95d69d7be34279fd64d33256721a.png"]],
                ["스텐레스 하이핀 중형보일러", "554/001/001/b6949b6644f2650a98bc3e9f73632a22.png", ["554/001/001/9c9e41446e13e28c36824c32b3776755.png", "554/001/001/b8820a36cf38e1dac7a910ebee07907f.png", "554/001/001/724bff4925da912e7f38148ace9194f2.png", "554/001/001/7490ee6185af4b3e5e4bd6c9f151b5f3.jpg"]],
                ["중형 하이핀 보일러", "554/682/e5439ad0245c6cd40d3d4a4c75baaf9b.png", ["554/682/40d30d713d6540ce149b0daec30e5f6f.jpg", "554/682/84c64fe03076c54ef9e6783ba5ef90b5.png", "554/682/fa9717bdabf085859fb85e41045b12c3.png"]],
                ["입형 중형보일러", "554/692/1b5cb0ce6cb2c0a2ec16903ebf80441b.png", ["554/692/9ef5efd7b46ff3e7d2021b8d3c65b6a7.png", "554/692/8f2f8293ac34a2ad7fe9a2ee2826f994.png", "554/692/21cedb47acf29696b69b39d0dce0ff2a.jpg"]],
                ["소형 전기보일러(KSE 시리즈)", "554/728/025/a1f4d2ca8dd9717b223c09f5246f4ccb.png", ["554/728/025/c648ce2608f634312705d86a3a5949c6.png", "554/728/025/ccc43672538dfce36925934cc83184e7.png", "554/728/025/4bd8c206d449f980710c2f7e208a0475.jpg"]],
                ["저탕식 전기보일러", "554/210/023/17f5d10cfb263a727952caa92c3787cf.png", ["554/210/023/99549212eedd6191e803c088df277919.png", "554/210/023/0cb3f76b62ec8adcd51424470470c2a8.jpg"]]
            ]
        },
        "heating-mat": {
            eyebrow: "HEATING MAT LINEUP", title: "난방매트 제품",
            items: [
                ["귀뚜라미 카본보드 온돌", "6930/117/022/e782693c7e88113c8a7be4fa15a16943.png", ["6930/117/022/a565d5ad644e1dcf0c2d23fdff748e2c.png", "6930/117/022/bb1be82f64aea97418219bdd5bb3832b.jpg"]],
                ["귀뚜라미 카본매트 온돌 고급형 KMC 시리즈(블랙)", "6930/390/022/82a6b19374776e68ab33d7fa29055465.png", ["6930/390/022/254b374e7e415dc9513e1db59d72813b.png", "6930/390/022/f735fd9db3e3dafb27306f26cf907d67.png", "6930/390/022/cb65ff92e4af730c4f70c3593b847184.jpg"]],
                ["귀뚜라미 카본매트 온돌 고급형 KMC 시리즈(실버)", "6930/395/022/5d5915f19af83c17d9464f0dfe2a5cb9.png", ["6930/395/022/d2bd69ce11ef294a0ae2211ba250481f.png", "6930/395/022/2e1e1e216b3f3521a1cdc74adbc61b11.png", "6930/395/022/425c7ce7dfa565754732ec2cf2dfc2b8.jpg"]],
                ["귀뚜라미 카본매트 온돌 고급형 92 시리즈", "6930/594/020/44bf7e304800cd92d5ef6c72deac2027.png", ["6930/594/020/40565e51699bc2a1801f8aa0641c6458.png", "6930/594/020/f23f52073c8c5ec0e9f304bfa7522ec9.png", "6930/594/020/3cd794c7d0b486d4fd8481da5826bea3.jpg"]],
                ["귀뚜라미 카본매트 온돌 고급형 87N/NA 시리즈", "6930/339/022/3fa676d91a0bbe73a3ae007b786c588d.png", ["6930/339/022/b61483ce197bc434a0c61c4b47d2a3cc.png", "6930/339/022/85bfa9da1c63edf3f49bde0b4ea0ec1b.png", "6930/339/022/fe23bffde1b28d18559bfc5e1df3249c.jpg"]]
            ]
        },
        "system": {
            eyebrow: "SYSTEM PRODUCT LINEUP", title: "시스템 제품",
            items: [
                ["귀뚜라미 온수열원 시스템", "6939/881/019/27568ff0869a1cde8b826217e6fbb58b.png", ["6939/881/019/da6eecc9668dd8562b42987c1f13b27f.png", "6939/881/019/1ba22fd6d53b5e159cd35a011102f60f.png", "6939/881/019/b8668b47e57b594dff5f98d826e276c6.jpg"]],
                ["귀뚜라미 IoT 월패드 & 각방제어시스템", "6939/164/004/87178ef9bc46fc778430523ad0cd92ee.png", ["6939/164/004/b0029355d0a3f2d28cadbbce848de605.png", "6939/164/004/b4ae77bee78dc432b3500fa7dac0bca0.jpg"]],
                ["각방제어구동기/ 밸브제어기", "6939/061/010/2205b189cdafe98781984edb9d63940b.png", ["6939/061/010/ea282f2b72c69c9641884215a299c1ed.png", "6939/061/010/0eb7ba51a2d7090e877f08f7413ddd61.png", "6939/061/010/f04dc0d9944b7282f7446dd28d4f3a1f.png", "6939/061/010/8341eb07309df6ee203eb3bfeb93221d.jpg"]],
                ["귀뚜라미 각방제어시스템", "6939/680/013/463ebc87c7e2ed2b43c85da368ce6549.png", ["6939/680/013/98cd2c0b089283e76072d21bf835881f.png", "6939/680/013/c67ff3f2a6c39df3abeed6dc8f1b6e7a.jpg", "6939/680/013/e3a558d814c729f23f682f568a2e43f9.png", "6939/680/013/9db72edf5601fba67178cd3bd013a34c.png"]],
                ["거꾸로 콘덴싱 프리미엄 온수기", "6939/820/008/b8f6e268a185916c17f6123980a2dd91.png", ["6939/820/008/5556bbf57544085635711ee582ea7650.png", "6939/820/008/bfae02f28b8b38b65f57b095c235b791.png", "6939/820/008/c038fc55ce1e2eeebf921b23169656b4.jpg"]],
                ["거꾸로 콘덴싱 스탠다드 온수기", "6939/603/018/30f0a548a3c95679e374196b605a1238.png", ["6939/603/018/cc81a224a250ff04736edb2f55970560.png", "6939/603/018/6aa05341ec29bc39444221ab122f061b.png", "6939/603/018/cf2db620cdd06129c6add675f5cac0c9.jpg"]],
                ["거꾸로 콘덴싱 난방전용보일러", "6939/834/008/3b644731ea5b14b1cb5cb0c45ffd5efa.png", ["6939/834/008/7537276f6d0fe98fe0bf5008c4426764.png", "6939/834/008/d978e62bac73ba7d8924e922b7debf4b.png", "6939/834/008/a545e342df2e3fa77cf2362e02a128ea.jpg"]],
                ["귀뚜라미 온수플러스+ 시스템", "6939/067/024/33c0c2fd7b46fe6c5864454e347ed1a3.png", ["6939/067/024/3b07068d09163d25b79eac1057a3912c.png", "6939/067/024/dcf6ce5701ed9afeb0d0f1ef8e5389d3.jpg"]],
                ["귀뚜라미보일러 AI 방방 난방 시스템", "6939/657/027/9b2b264149cd0d3abc7b745202d5501f.png", ["6939/657/027/361fc158b371669937abdef8fe03a25e.png", "6939/657/027/5d67f6d49e923ed8a36a962f0886381c.png", "6939/657/027/3f3e12edb19b8cf51b9ae8edbc05bd3f.png", "6939/657/027/41bb1e090a54fc4347f8c6e9b27717a9.jpg", "6939/657/027/b9cb9b5d4d455cfc0401bcfe92b8e558.jpg"]]
            ]
        },
        "air-care": {
            eyebrow: "AIR CARE / VENTILATION LINEUP", title: "공기청정/환기 제품",
            items: [
                ["귀뚜라미 환기 플러스+ 공기청정시스템", "14882/976/014/c17d1cb88aca97d53da32a160a636f87.png", ["14882/976/014/df2028bae23dc39366adb2056e2539eb.png", "14882/976/014/ac7abb402350fbec45a1a8562f90ea3e.jpg"]]
            ]
        },
        "air-conditioner": {
            eyebrow: "AIR CONDITIONER LINEUP", title: "에어컨 제품",
            items: [
                ["2026년형 귀뚜라미 창문형 에어컨 (KAB-35W)", "946/814/026/c9ddf8b0629b5458dd9d860a62e3d98c.png", ["946/814/026/11bd4667be731985098a85b845ff707a.png", "946/814/026/cb66d586440f38d366955c8095b2616c.jpg", "946/666/025/7595be977b59ec4a5db7a2e005f8288a.jpg", "946/666/025/f272e4b81fe9945cefc7088a3721ea0e.jpg", "946/814/026/da9ddc247847f3e873adb6dac32ead7e.jpg"]],
                ["2025년형 귀뚜라미 창문형 에어컨 (KAA-35W)", "946/666/025/274eabbc3bbcbecae4c18715f43b3966.png", ["946/666/025/a8ed316e510aed594329fc25dedf7fb5.png", "946/666/025/f15ea96f86f6ec982a012a982db5ee50.jpg", "946/666/025/7595be977b59ec4a5db7a2e005f8288a.jpg", "946/666/025/f272e4b81fe9945cefc7088a3721ea0e.jpg", "946/666/025/0db4157cf0e6e0f4d2741d55c577a055.jpg"]],
                ["2023년형 귀뚜라미 창문형 에어컨 (KAA-15W)", "946/963/021/ad4f41890c42d3e5b78043cd7d79ad26.png", ["946/963/021/6b0cbf4e9897060ffc693e267aea3d35.png", "946/963/021/5cbdb99d1be00d966c477e8a085fcdeb.jpg", "946/963/021/6d625afe0b727c3cdd7802df6783b2bd.jpg", "946/963/021/1329ad108685dfac633e54729c436f1e.jpg", "946/963/021/630d400cfe14b9faade4e8bc9eef3312.jpg"]]
            ]
        },
        "thermostat": {
            eyebrow: "ROOM THERMOSTAT LINEUP", title: "실내온도조절기 제품",
            items: [
                ["IoT 실내온도조절기", "948/051/013/f4daab29442b5dfe4b2b21ef1792b703.png", ["948/051/013/060f1ec6b54666400130a705bc6a3edc.png", "948/051/013/4be8affc4d81025411dd61702d466b63.png", "948/051/013/5d5b7c95aea22ef0aa54a63a94d8b761.png", "948/051/013/0348f9d341fd3599c7bd905a62cd1b45.png", "948/051/013/1a7f54f22c3e3470154db3f9d0a3418d.jpg"]],
                ["NCTR-60 Wifi /NCTR-60W Wifi", "948/461/013/8e80e3ddd56239d009d4cc9e74f8e352.png", ["948/461/013/3ecc98185fe01ebf6702307b81baa9f5.png", "948/461/013/d0f283b4223c80533e85a3027ba9e080.png", "948/461/013/5fed028ce077e290912ad8bdd5687a77.jpg"]],
                ["NCTR-100C Wifi", "948/103/013/05fbbabe17a3e87b7740e0129f121f49.png", ["948/103/013/f14e0adc0132f5920ea3138978ab4ce7.png", "948/103/013/544b69c23a346716aec9aed54b619597.jpg"]],
                ["NCTR-200 Wifi", "948/445/021/54479ab8c95edaf8639713e02a1a3baa.png", ["948/445/021/38ae09d8b6c5820f4f9770201ab8812a.png", "948/445/021/21bb341101b05ecc227bea28aed6ff27.jpg"]],
                ["NRS-1200WF", "948/108/019/d6397de18e8064c8e5b9894ea5b36924.png", ["948/108/019/29bec7b7bf6e70f0df7121176a74576d.png", "948/108/019/2ee8ae2a94b6b25d6b452943e3fe6941.jpg"]],
                ["NRS-70WF", "948/230/013/3501d13bd3093fc8df7428333989d275.png", ["948/230/013/f5e8248e68b49d244b905ddaf38cc3fe.png", "948/230/013/98a39f0e0fc04ab76596dc8c064c91b1.jpg"]],
                ["NCTR-10 Wifi", "948/040/012/0e084f431369ce415dfd461ad59e8499.png", ["948/040/012/5ef5fd91b3ff93144f5ee6185af3d56b.png", "948/040/012/d6a375e543d860096f709f67722706d6.jpg"]],
                ["NCTR-60S", "948/559/022/1c065439f2259e78aa66a45421fffdb4.png", ["948/559/022/c95e7289b1aa6ba52fea2a24f3b7acc3.png", "948/559/022/99ff45aea69b16520effff06cef81b9f.png"]],
                ["NCTR-70", "948/312/020/166ff4acd7fa80790d422c177b994ab2.png", ["948/312/020/0d74dc5e9e72938f4d877a764b64fcc6.png", "948/312/020/a5b6090723bde72db7861e8667c0dde9.png"]],
                ["CTR-15 Wifi", "948/109/011/52ab99eef6fbac91ea97a0495e265e3a.png", ["948/109/011/4f7904c2cf654c5d174efeccd5e566af.png", "948/109/011/296e9c87b7e454a296fd0ae2278ba6fc.jpg"]],
                ["NCTR-60W", "948/077/019/cb9817b4f8463e28b4763415218cbe67.png", ["948/077/019/dfbcde5c0a0807537a27afa8281b1418.png", "948/077/019/45b58fc67634041fef6835ea462991ed.png"]],
                ["CTR-65 Wifi", "948/413/015/a24070fccc738b76c085398bc806a814.png", ["948/413/015/5a74e3968ee343e468172fa84cd1d1b1.png", "948/413/015/4df9af132a2e1982adfba28136a3a5c0.jpg"]],
                ["NCTR-7100", "948/850/026/8df7a807c890a4aa09f39d147dcdedd5.png", ["948/850/026/106ec58955656c2084ecf7ce328b6d69.png", "948/850/026/ab8516a62644610e268f1a3a723fbbff.png"]],
                ["NCTR-100B/ 100", "948/085/019/95663cfe3a29b4bf3e2422592dd6e7dc.png", ["948/085/019/f724c9ead5988f5e611a1bbbce1dd36b.png", "948/085/019/0e24f6af8d9602bbd2019a6818d48334.png"]],
                ["NCTR-6000", "948/324/012/809338315367c9242223898aaebdcdc6.png", ["948/324/012/f8220e4b753d0b8e16c4903333c08e3a.png", "948/324/012/752b039187f840d12d734379cc300f3b.png"]],
                ["NCTR-60", "948/437/013/97a5ec1df31b8a435b550d97c9bffcde.png", ["948/437/013/86c2c5c157d7c894a48edd73c8d43657.png", "948/437/013/9ef91f73314813132c096fec5bd20543.png"]],
                ["NCTR-6100", "948/889/012/b060cb77b34dbce6c3dcd42ee1a93129.png", ["948/889/012/1da5803bda07b65b110761529cb08f33.png", "948/889/012/07db940e0513271257c5a5b9aff02ac7.png"]],
                ["NCTR-50N", "948/820/011/6bbe4a212f946a3ec8bddce35876d320.png", ["948/820/011/cb160b383dd9d171d6ce97e07b88d95f.png", "948/820/011/d41abe0c99f615ff9172db0ae35e940a.png"]],
                ["NCTR-5000", "948/335/010/a61e68d6358c311ad14e2b7765629dc0.png", ["948/335/010/43d4b6bc71fb6aa408b791d703276002.png", "948/335/010/7f3141e3db426d6496459ba1f3e149d5.png"]],
                ["CTR-5700PLUS", "948/046/001/092f66a355676ee18fc27328fc690088.png", ["948/046/001/81059b660717b24ee513e3ad8a1c0659.png", "948/046/001/5837f632115ef1d2757adf1e053cd5c1.png"]],
                ["CTR-5000", "948/038/001/0c565b25cba70c3f40cc8855f39eef60.png", ["948/038/001/eea92a5add33ab7e2172d5da889c5bee.png", "948/038/001/63872d0cfccadbdd44930441262c81af.png"]],
                ["CTR-6070", "948/054/001/a6411d7e94983794286b75a9d5cd5c26.png", ["948/054/001/244d1814018ceabf91404dd936a87d1a.png", "948/054/001/580db37e9f69bd6cb46d375cde7d3359.png"]],
                ["HOT-2000", "948/074/001/6ff20c1a697412ecd0f23332c8c54d47.png", ["948/074/001/a17057e90c648e5fee7f0b8800875823.png", "948/074/001/ef07823b4b828d467f5d558eecadd8ba.png"]],
                ["HOT-300", "948/066/001/73202f4241b4454eea387f68973430e5.png", ["948/066/001/fd3331e839b56ed9e4410d0ef7fbb8fd.png", "948/066/001/59730f7c25516564cee443e4211f5462.png"]]
            ]
        },
        "etc": {
            eyebrow: "OTHER PRODUCT LINEUP", title: "기타 제품",
            items: [
                ["세이프온 일산화탄소(CO) 경보기", "images/etc_1.png", ["558/414/024/c12ad603d09cf42582eb12610aab7940.png", "558/414/024/63d67b9ccf7782d257082305c56a0d7c.png", "558/414/024/61b3696f28c9e632aaef442d2c4cb24c.png", "558/414/024/df8fe0adec8b50c16ff636e843c64795.png", "558/414/024/e2440eaaa9d6b44896a80db7e5566a26.jpg"]],
                ["귀뚜라미 펌프", "images/etc_2.png", ["558/210/004/834bcd77e961d565fefdcfdca763e8b4.jpg"]],
                ["팬코일 유닛", "images/etc_3.png", ["558/562/009/d89eb406306e3bda56e9838d1c90db38.png", "558/562/009/c379f89837597a602d104f1ecbb5cb86.jpg"]]
            ]
        }
    };
})();
