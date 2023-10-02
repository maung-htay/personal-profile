const DUMMY_WORK: workHistory = {
    "work-history": {
        "companyName": "ICTスターグループミャンマー株式会社",
        "date": "2016年 11月	～	現在",
    },
    "job-career": [
        {
            "date": "2022年07月　～　現在",
            "dept": "NEC株式会社キャリアソリューション事業部",
            "jobContent": "業務内容：データ分析　テスト、プロジェクトのカスタマイズとWebアプリケーションの開発",
            "jobs": [
                {
                    "period": "2023年08月～現在 ",
                    "pjContent": "メールログデータの分析Webアプリケーション開発に製造や試験担当",
                    "responsible": {
                        "detail": "ログデータの分析のためWebアプリケーションの開発",
                        "participation": ["機能設計", "プログラム製造", "単体試験", "結合試験", "バグ対応"]
                    },
                    "environment": {
                        "languages": ["Python", "HTML/CSS", "JS", "MongoDB", "Docker", "Docker Compose"],
                        "frameworks": ["Flask"],
                        "systemEnvironment": ["Linux"]
                    },
                    "role": ["ソフトウェアエンジニア ", "プロジェクト規模 人数：4人"]
                },
                {
                    "period": "2022年04月 ～ 2032年07月 ",
                    "pjContent": "SIMログデータ分析Webプロジェクトのカスタマイズ開発に製造や試験担当",
                    "responsible": {
                        "detail": "チケットを分析すると結果はどやって出るのを分かるようにCodingカスタマイズ開発",
                        "participation": ["プログラム製造", "単体試験", "結合試験", "バグ対応"]
                    },
                    "environment": {
                        "languages": ["Python", "HTML/CSS", "JS", "MongoDB", "Docker", "Docker Compose"],
                        "frameworks": ["Flask"],
                        "systemEnvironment": ["Linux"]
                    },
                    "role": ["ソフトウェアエンジニア ", "プロジェクト規模 人数：4人"]
                },
                {
                    "period": "2022年03月 ～ 2032年04月 ",
                    "pjContent": "チケットテスト自動化ツール開発",
                    "responsible": {
                        "detail": "チケットをテストすると人間だったら７２Hrsくらいかかりました。自動化ツールを使うと１４分くらい",
                        "participation": ["詳細設計", "プログラム製造", "単体試験", "結合試験", "バグ対応"]
                    },
                    "environment": {
                        "languages": ["Python"],
                        "frameworks": [""],
                        "systemEnvironment": ["Linux"]
                    },
                    "role": ["プロジェクトリーダー ", "プロジェクト規模 人数：1人"]
                },
                {
                    "period": "2022年07月 ～ 2032年02月 ",
                    "pjContent": "SIMログチケットテスト、ACCRプロジェクト、Docker、Kubernetes、Data Scienceの勉強 ",
                    "responsible": {
                        "detail": "テストとプロジェクトの勉強",
                        "participation": ["テスト"]
                    },
                    "environment": {
                        "languages": [""],
                        "frameworks": ["Chrome"],
                        "systemEnvironment": [""]
                    },
                    "role": ["テスター ", "プロジェクト規模 人数：4人"]
                }

            ],
        },
        {
            "date": "2021年10月　～　2022年06月",
            "dept": "■ NEC株式会社第二キャリアシステム事業部",
            "jobContent": "業務内容：SpecteeようなプロジェクトをMyWorldで開発",
            "jobs": [
                {
                    "period": "2021年10月～2022年06月 （9ヶ月）",
                    "pjContent": "Specteeようなプロジェクトの開発",
                    "responsible": {
                        "detail": "国内で発生した事故に対するのシステム",
                        "participation": ["機能設計", "詳細設計", "プログラム製造", "単体試験", "バグ対応"]
                    },
                    "environment": {
                        "languages": ["HTML/CSS,", "JS", "FME", "PostgreSQL"],
                        "frameworks": ["MyWorld"],
                        "systemEnvironment": ["Linux"]
                    },
                    "role": ["プロジェクトリーダー  ", "プロジェクト規模 人数：2人"]
                },

            ],
        },

    ]
}

export function getAllWorkHistory() {
    return DUMMY_WORK;
}
