
/*const proxy = document.getElementById("search1")
proxy.addEventListener("keyup", searchingprocess1);


function searchingprocess1() {*/
 

const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://m.1688.com/offer/613495279132.html?ptow=113d26e7c9a&spm=a261y.7663282.1998411376.1.394850a3pL7C04&&scm=1007.19151.166084.00&ODitemId=615854850258&itemId=613495279132&pvid=724a52a7-3fd9-4e5d-aa20-f85777e00e99&extStr=613495279132..615854850258..2206548067692..1.0..1.0..47.4476686577385..1.0..oI2ISwg..1045065..no..odTab..192002_194498_197762_213250_17410_17794_17858_17282_17538_18050_18114_18754_21186_16834_16770_16514_16962_17474_91010..724a52a7-3fd9-4e5d-aa20-f85777e00e99..0.0..1007.19151.166084.0/"
//https://detail.1688.com/offer/613495279132.html?spm=a261y.7663282.1998411376.1.394850a3pL7C04&&scm=1007.19151.166084.00&ODitemId=615854850258&itemId=613495279132&pvid=724a52a7-3fd9-4e5d-aa20-f85777e00e99&extStr=613495279132..615854850258..2206548067692..1.0..1.0..47.4476686577385..1.0..oI2ISwg..1045065..no..odTab..192002_194498_197762_213250_17410_17794_17858_17282_17538_18050_18114_18754_21186_16834_16770_16514_16962_17474_91010..724a52a7-3fd9-4e5d-aa20-f85777e00e99..0.0..1007.19151.166084.0";

let siteName = "";
const categories = new Set();
const tags = new Set();
const locations = new Set();
const positions = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();

 

  $("div.price-show-box span.price-num").each((index, element) => {
    tags.add($(element).text());
  });
  /*
  
  $(".location").each((index, element) => {
    locations.add($(element).text());
  }); siteName = $('.top > .action-post-job').text();
  $("div.nav p").each((index, element) => {
    categories.add($(element).text());
  });
  $('.company_and_position [itemprop="title"]').each((index, element) => {
    positions.add($(element).text());
  });*/
  return { 
    tags: [...tags].sort(),
    /*positions: [...positions].sort(),
    locations: [...locations].sort(),
    categories: [...categories].sort(),
    siteName,*/
  };
};


module.exports = getResults;
