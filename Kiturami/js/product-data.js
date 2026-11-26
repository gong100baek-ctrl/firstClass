// 귀뚜라미 제품 목록 (제품 상세 페이지 + 주문/결제 페이지 공용)
// 제품명/이미지는 krb.co.kr 제품 목록 기준입니다. 이미지가 "images/"로 시작하면 이 사이트의 파일, 아니면 krb.co.kr 이미지 경로입니다.
(() => {
    const KRB_IMG = "https://krb.co.kr/files/attach/images/";
    window.KITURAMI_IMG = (path) => (/^(images\/|https?:)/.test(path) ? path : KRB_IMG + path);
    window.KITURAMI_LINEUPS = {
        "gas-boiler": {
            eyebrow: "GAS BOILER LINEUP", title: "가스보일러 제품",
            items: [
                ["귀뚜라미보일러 AI 방방 난방 시스템", "images/gas_1.png"],
                ["거꾸로 NEW 콘덴싱 P10 보일러", "images/gas_2.png"],
                ["거꾸로 NEW 콘덴싱 L10 보일러", "images/gas_3.png"],
                ["거꾸로 ECO 콘덴싱 L20 보일러", "images/gas_4.png"],
                ["거꾸로 ECO 콘덴싱 S20 보일러", "images/gas_5.png"],
                ["거꾸로 ECO 콘덴싱 보일러", "images/gas_6.png"],
                ["거꾸로 콘덴싱 프리미엄 가스보일러", "images/gas_7.png"],
                ["빌라형 거꾸로 콘덴싱 가스보일러", "images/gas_8.png"],
                ["트윈알파 eco L11 가스보일러", "images/gas_9.png"],
                ["거꾸로 IN L10 가스보일러", "images/gas_10.png"]
            ]
        },
        "oil-boiler": {
            eyebrow: "OIL BOILER LINEUP", title: "기름보일러 제품",
            items: [
                ["스텐 하이핀 BLUE 기름보일러", "images/oil_1.png"],
                ["스텐 하이핀 eco 기름보일러", "images/oil_2.png"],
                ["터보 하이핀 eco 기름보일러", "images/oil_3.png"],
                ["거꾸로 콘덴싱 eco 기름보일러", "images/oil_4.png"],
                ["스텐 하이핀 L10 기름보일러", "images/oil_5.png"],
                ["스텐 하이핀 N 기름보일러", "images/oil_6.png"]
            ]
        },
        "water-heater": {
            eyebrow: "WATER HEATER LINEUP", title: "온수기 제품",
            items: [
                ["저장식 전기온수기(스테인리스)", "556/911/026/776d1a65a7445149f2c6cc0f48b8cd84.png"],
                ["저장식 전기온수기 (법랑)", "556/766/5a231c4855fdba77e3a5242b4e3b3891.png"],
                ["심야 전기 온수기", "556/744/96c306271d20c671cad6e418239cef2b.png"],
                ["트윈알파 가스온수기", "556/935/021/49eb60d252864c4589073a4c6730e1d7.png"],
                ["중형 전기온수기", "556/485/025/60fdcb5590c007d9c0cc010713249412.png"]
            ]
        },
        "renewable": {
            eyebrow: "RENEWABLE / COMMERCIAL / ELECTRIC LINEUP", title: "신재생/중대형/전기 제품",
            items: [
                ["거꾸로 타는 화목보일러", "554/661/4fb42d9a69d35f130f23306f2348d31e.png"],
                ["화목보일러(일반형)", "554/615/1c7a89ec1bba8e10eb40ec6d78f07e4b.png"],
                ["축열식 화목보일러", "554/642/e1d8f53787b6b7806b757def4d9985d9.png"],
                ["하이브리드 화목보일러", "554/626/cc51d2b53d81c72ad42cc07a8a522bbc.png"],
                ["가정용 펠릿보일러", "554/806/7d7b22d667705ab49f9b8f54c0eac78f.png"],
                ["스텐레스 하이핀 중형보일러", "554/001/001/b6949b6644f2650a98bc3e9f73632a22.png"],
                ["중형 하이핀 보일러", "554/682/e5439ad0245c6cd40d3d4a4c75baaf9b.png"],
                ["입형 중형보일러", "554/692/1b5cb0ce6cb2c0a2ec16903ebf80441b.png"],
                ["소형 전기보일러(KSE 시리즈)", "554/728/025/a1f4d2ca8dd9717b223c09f5246f4ccb.png"],
                ["저탕식 전기보일러", "554/210/023/17f5d10cfb263a727952caa92c3787cf.png"]
            ]
        },
        "heating-mat": {
            eyebrow: "HEATING MAT LINEUP", title: "난방매트 제품",
            items: [
                ["귀뚜라미 카본보드 온돌", "6930/117/022/e782693c7e88113c8a7be4fa15a16943.png"],
                ["귀뚜라미 카본매트 온돌 고급형 KMC 시리즈(블랙)", "6930/390/022/82a6b19374776e68ab33d7fa29055465.png"],
                ["귀뚜라미 카본매트 온돌 고급형 KMC 시리즈(실버)", "6930/395/022/5d5915f19af83c17d9464f0dfe2a5cb9.png"],
                ["귀뚜라미 카본매트 온돌 고급형 92 시리즈", "6930/594/020/44bf7e304800cd92d5ef6c72deac2027.png"],
                ["귀뚜라미 카본매트 온돌 고급형 87N/NA 시리즈", "6930/339/022/3fa676d91a0bbe73a3ae007b786c588d.png"]
            ]
        },
        "system": {
            eyebrow: "SYSTEM PRODUCT LINEUP", title: "시스템 제품",
            items: [
                ["귀뚜라미 온수열원 시스템", "6939/881/019/27568ff0869a1cde8b826217e6fbb58b.png"],
                ["귀뚜라미 IoT 월패드 & 각방제어시스템", "6939/164/004/87178ef9bc46fc778430523ad0cd92ee.png"],
                ["각방제어구동기/ 밸브제어기", "6939/061/010/2205b189cdafe98781984edb9d63940b.png"],
                ["귀뚜라미 각방제어시스템", "6939/680/013/463ebc87c7e2ed2b43c85da368ce6549.png"],
                ["거꾸로 콘덴싱 프리미엄 온수기", "6939/820/008/b8f6e268a185916c17f6123980a2dd91.png"],
                ["거꾸로 콘덴싱 스탠다드 온수기", "6939/603/018/30f0a548a3c95679e374196b605a1238.png"],
                ["거꾸로 콘덴싱 난방전용보일러", "6939/834/008/3b644731ea5b14b1cb5cb0c45ffd5efa.png"],
                ["귀뚜라미 온수플러스+ 시스템", "6939/067/024/33c0c2fd7b46fe6c5864454e347ed1a3.png"],
                ["귀뚜라미보일러 AI 방방 난방 시스템", "6939/657/027/9b2b264149cd0d3abc7b745202d5501f.png"]
            ]
        },
        "air-care": {
            eyebrow: "AIR CARE / VENTILATION LINEUP", title: "공기청정/환기 제품",
            items: [
                ["귀뚜라미 환기 플러스+ 공기청정시스템", "14882/976/014/c17d1cb88aca97d53da32a160a636f87.png"]
            ]
        },
        "air-conditioner": {
            eyebrow: "AIR CONDITIONER LINEUP", title: "에어컨 제품",
            items: [
                ["2026년형 귀뚜라미 창문형 에어컨 (KAB-35W)", "946/814/026/c9ddf8b0629b5458dd9d860a62e3d98c.png"],
                ["2025년형 귀뚜라미 창문형 에어컨 (KAA-35W)", "946/666/025/274eabbc3bbcbecae4c18715f43b3966.png"],
                ["2023년형 귀뚜라미 창문형 에어컨 (KAA-15W)", "946/963/021/ad4f41890c42d3e5b78043cd7d79ad26.png"]
            ]
        },
        "thermostat": {
            eyebrow: "ROOM THERMOSTAT LINEUP", title: "실내온도조절기 제품",
            items: [
                ["IoT 실내온도조절기", "948/051/013/f4daab29442b5dfe4b2b21ef1792b703.png"],
                ["NCTR-60 Wifi /NCTR-60W Wifi", "948/461/013/8e80e3ddd56239d009d4cc9e74f8e352.png"],
                ["NCTR-100C Wifi", "948/103/013/05fbbabe17a3e87b7740e0129f121f49.png"],
                ["NCTR-200 Wifi", "948/445/021/54479ab8c95edaf8639713e02a1a3baa.png"],
                ["NRS-1200WF", "948/108/019/d6397de18e8064c8e5b9894ea5b36924.png"],
                ["NRS-70WF", "948/230/013/3501d13bd3093fc8df7428333989d275.png"],
                ["NCTR-10 Wifi", "948/040/012/0e084f431369ce415dfd461ad59e8499.png"],
                ["NCTR-60S", "948/559/022/1c065439f2259e78aa66a45421fffdb4.png"],
                ["NCTR-70", "948/312/020/166ff4acd7fa80790d422c177b994ab2.png"],
                ["CTR-15 Wifi", "948/109/011/52ab99eef6fbac91ea97a0495e265e3a.png"],
                ["NCTR-60W", "948/077/019/cb9817b4f8463e28b4763415218cbe67.png"],
                ["CTR-65 Wifi", "948/413/015/a24070fccc738b76c085398bc806a814.png"],
                ["NCTR-7100", "948/850/026/8df7a807c890a4aa09f39d147dcdedd5.png"],
                ["NCTR-100B/ 100", "948/085/019/95663cfe3a29b4bf3e2422592dd6e7dc.png"],
                ["NCTR-6000", "948/324/012/809338315367c9242223898aaebdcdc6.png"],
                ["NCTR-60", "948/437/013/97a5ec1df31b8a435b550d97c9bffcde.png"],
                ["NCTR-6100", "948/889/012/b060cb77b34dbce6c3dcd42ee1a93129.png"],
                ["NCTR-50N", "948/820/011/6bbe4a212f946a3ec8bddce35876d320.png"],
                ["NCTR-5000", "948/335/010/a61e68d6358c311ad14e2b7765629dc0.png"],
                ["CTR-5700PLUS", "948/046/001/092f66a355676ee18fc27328fc690088.png"],
                ["CTR-5000", "948/038/001/0c565b25cba70c3f40cc8855f39eef60.png"],
                ["CTR-6070", "948/054/001/a6411d7e94983794286b75a9d5cd5c26.png"],
                ["HOT-2000", "948/074/001/6ff20c1a697412ecd0f23332c8c54d47.png"],
                ["HOT-300", "948/066/001/73202f4241b4454eea387f68973430e5.png"]
            ]
        },
        "etc": {
            eyebrow: "OTHER PRODUCT LINEUP", title: "기타 제품",
            items: [
                ["세이프온 일산화탄소(CO) 경보기", "images/etc_1.png"],
                ["귀뚜라미 펌프", "images/etc_2.png"],
                ["팬코일 유닛", "images/etc_3.png"]
            ]
        }
    };
})();
