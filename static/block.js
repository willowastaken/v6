  const blockedSites = [
        "pornhub.com", "xvideos.com", "xhamster.com", "redtube.com", "xnxx.com", "youporn.com",
        "tube8.com", "badsite.com", "darkweb.com", "1337x.to", "thepiratebay.org",
        "kickass.to", "doxbin.com", "chaturbate.com", "cam4.com", "chatroulette.com",
        "ashleymadison.com", "thedarkweb.com"
    ];

    const blockedKeywords = [
        "sex", "porn", "por n", "p or n", "xxx", "hentai", "erotic", "nude", "naked", "blowjob", "anal", "fetish",
        "gangbang", "masturbation", "camgirl", "dick", "pussy", "dildo", "bdsm",
        "cum", "homophobic", "xenophobic", "slur", "creampie", "kkk", "terrorism", 
        "jihad", "doxx", "doxxing", "hate crime", "white supremacy", "drugs", "weed", "cocaine",
        "heroin", "meth", "buy guns", "deep web", "dark web", "black market", "counterfeit",
        "credit card fraud", "piracy", "torrent", "murder", "massacre", "torture", "gore", "self-harm", 
        "cut yourself", "phishing", "s3x", "SSN", "social security number"
    ];

    const blockedKeywordPatterns = [
        /s[\s_]*[3eE]+[\s_]*x/i, /p[\s_]*[o0]+[\s_]*rn/i, /n[\s_]*[u]+[\s_]*d[e3]+/i, /h[\s_]*[a@]+[\s_]*c[k]+/i,
        /dr[\s_]*[u]+[\s_]*gs/i, /t[\s_]*[0o]+[\s_]*rr[\s_]*[e3]+nt/i, /m[\s_]*[u]+[\s_]*r[\s_]*d[e3]+r/i,
        /s[\s_]*u[\s_]*i[\s_]*c[\s_]*i[\s_]*d[e3]+/i, /b[\s_]*o[\s_]*mb/i, /r[\s_]*a[\s_]*c[\s_]*i[\s_]*st/i,
        /w[\s_]*h[\s_]*i[\s_]*t[\s_]*e[\s_]*s[\s_]*u[\s_]*pr[\s_]*[e3]+m[\s_]*[a@]+c[y]+/i, /n[\s_]*[@a]+z[i1]/i,
        /k[\s_]*[i1]+[\s_]*ll/i, /m[\s_]*[@a]+st[\s_]*[e3]+r[\s_]*b[\s_]*[a@]+t[i1]+on/i, /d[\s_]*i[\s_]*ck/i,
        /p[\s_]*[u]+ssy/i, /d[\s_]*i[\s_]*l[\s_]*d[\s_]*o/i, /j[\s_]*ih[\s_]*[a@]+d/i, /c[\s_]*[0o]+caine/i
    ];

    function isBlockedSite(url) {
        return blockedSites.some(blockedSite => url.includes(blockedSite));
    }

    function containsBlockedKeyword(text) {
        return blockedKeywords.some(keyword => text.includes(keyword));
    }

    function containsBlockedKeywordPattern(text) {
        return blockedKeywordPatterns.some(pattern => pattern.test(text));
    }

    document.getElementById('uv-form').addEventListener('submit', function(event) {
        const inputValue = document.getElementById('uv-address').value.trim().toLowerCase();

        if (isBlockedSite(inputValue) || containsBlockedKeyword(inputValue) || containsBlockedKeywordPattern(inputValue)) {
            event.preventDefault(); 
            document.getElementById('uv-error').innerText = "Access to this site or search term is blocked!";
            document.getElementById('uv-error-code').innerText = `Blocked content detected: ${inputValue}`;
            document.getElementById('uv-address').blur(); 
        } else {
            document.getElementById('uv-error').innerText = ""; 
            document.getElementById('uv-error-code').innerText = "";
        }
    });

    document.getElementById('uv-address').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = this.value.trim().toLowerCase();
            
            if (isBlockedSite(inputValue) || containsBlockedKeyword(inputValue) || containsBlockedKeywordPattern(inputValue)) {
                event.preventDefault(); 
                document.getElementById('uv-error-code').innerText = `Blocked content detected: ${inputValue}`;
                this.blur(); 
            }
        }
    });
