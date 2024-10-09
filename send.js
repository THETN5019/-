function send(roomid, msg) {
    fetch("https://api.live.bilibili.com/msg/send", {
        "headers": {
          "accept": "*/*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundary6Kt5kh4fJmP0iSBa",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "cookie": "buvid4=150592D0-94DB-3E65-9ADD-EA5DE678596C90567-023072621-lXNOqjFi7TCzLTeqSiW6SQ%3D%3D; LIVE_BUVID=AUTO5117024875165331; buvid_fp_plain=undefined; enable_web_push=DISABLE; header_theme_version=CLOSE; hit-dyn-v2=1; FEED_LIVE_VERSION=V_WATCHLATER_PIP_WINDOW; buvid3=9FD0FC75-1BEC-994C-2800-D5C00A9A4A5811381infoc; b_nut=1722518811; _uuid=9D1D8910D-1CB10-25DD-85D2-F10101B85E66D1011782infoc; fingerprint=6bc6544ad8db2389607d1ec8fb79a430; Hm_lvt_8a6e55dbd2870f0f5bc9194cddf32a02=1723558112,1723818145,1723984420,1724578845; rpdid=|(kRl|lJl)u0J'u~klu|RuYk; buvid_fp=f350feab44f927023738c91e1cca028e; bp_t_offset_3546676430113176=972098562491940864; home_feed_column=4; browser_resolution=846-984; b_lsid=5AFF56FC_191D08669C5; bsource=search_bing; CURRENT_BLACKGAP=0; CURRENT_FNVAL=16; SESSDATA=3ba84833%2C1741332398%2Cf8acf%2A92CjDiATGllKt_LnBFnSggXBRUGOi-7ReLtADtr0Ec7-UQSHd_Dzp4ojvT8PgBXPCNYy4SVmF4dTlrbmVrZ25LZHctOHc0dVJYY2FrNzIwVVlIT1k1OXl6Zmsta3oxUENOR3ZaYkg0VDFya3Y4dk1QMk5GXy04TXhRYklzQXlkRFF1SFd3ZmRlM3ZnIIEC; bili_jct=a1fe7631a0c38398feb1ad3ec2bec983; DedeUserID=3546679512926809; DedeUserID__ckMd5=aed5ef717ee459e0; sid=6vpz0q0c; bp_t_offset_3546679512926809=974708485268701184; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjYwMzk2MTEsImlhdCI6MTcyNTc4MDM1MSwicGx0IjotMX0.c6-H9JCN0cfJuijXOKZ85W2mcGkPMcWnbni7tSYbghw; bili_ticket_expires=1726039551; PVID=4",
          "Referer": "https://live.bilibili.com/26386365?live_from=82002&spm_id_from=666.4.top_right_bar_window_dynamic.content.click",
          "Referrer-Policy": "no-referrer-when-downgrade"
        },
        "body": "------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"bubble\"\r\n\r\n5\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"msg\"\r\n\r\n" + msg + "\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"color\"\r\n\r\n4546550\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"mode\"\r\n\r\n4\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"room_type\"\r\n\r\n0\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"jumpfrom\"\r\n\r\n82002\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"reply_mid\"\r\n\r\n0\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"reply_attr\"\r\n\r\n0\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"replay_dmid\"\r\n\r\n\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"statistics\"\r\n\r\n{\"appId\":100,\"platform\":5}\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"fontsize\"\r\n\r\n25\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"rnd\"\r\n\r\n1725781395\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"roomid\"\r\n\r\n26386365\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"csrf\"\r\n\r\na1fe7631a0c38398feb1ad3ec2bec983\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa\r\nContent-Disposition: form-data; name=\"csrf_token\"\r\n\r\na1fe7631a0c38398feb1ad3ec2bec983\r\n------WebKitFormBoundary6Kt5kh4fJmP0iSBa--\r\n",
        "method": "POST"
      });
}



module.exports = send;
