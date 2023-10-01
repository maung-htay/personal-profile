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
                        "participation": ["機能設計"]
                    },
                    "environment": {
                        "languages": ["Python", "Java", "Python", "Java", "Python", "Java"],
                        "frameworks": ["Flask"],
                        "systemEnvironment": ["Linux"]
                    },
                    "role": ["aab"]
                },

            ],
        },

    ]
}

export function getAllWorkHistory() {
    return DUMMY_WORK;
}
