let pCountArray = [6503311,7456399,7220066,7808592,8248125,8128275,8611865,7574442,9141141,8925171,
                   8869780,8821540,9708711,10045173,10858446,11737540,12083027,13913927,14711260,
                   14413123,17246621,16745695,18513434,18612172,17364027,18998424,17135981,13059787,
                   14684726,11414017,20923112,27866189,24144848,24799129,24828470,21736582,27718516,
                   25018386,28012344,25160381,24800391,23630435,22874423,21136635,20491797,17931155,
                   18831591,18924822,18393809,19122938,23100427,20065048,20313426,20429326,23190076,
                   25282644,24576191,25137678,26210044,20082026,18752106,17914756,16470140,16933559,
                   15224282,14454335,14010711,11495247,13793799,17020000,16470000,15990000,15930000,
                   16170000,15840000,15940000,16080000,16150000,15740000,16040000,16350000,16400000,
                   16870000
];

for(let i=2;i<pCountArray.length-2;i++){
    let num = pCountArray[i-2]+pCountArray[i-1]+pCountArray[i]+pCountArray[i+1]+pCountArray[i+2];
    let avg = num/5;
    let l = avg / 400000;
    let s = "";
    for(let j=0;j<l;j++){
        s += '*';
    }
    console.log("年份:"+(i+1932) + " " + s + '  '+l.toFixed(1));
}