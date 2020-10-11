// example: https://shopee.vn/voucher-details/LIFECCB09/60318180/64d4f461cc81ef7e1825a629d048c4156fc8cd78cec1520367134b04a6365204

var path = document.location.pathname;
var params = path.split('/');
// const urlParams = new URLSearchParams(window.location.search);
var urlParams = new URLSearchParams("");
urlParams.set('promotionId',params[3]);
urlParams.set('signature',params[4]);
urlParams.set('voucherCode',params[2]);
window.history.pushState("",null,'/search?' + urlParams.toString());
// https://shopee.vn/search?promotionId=60602370&signature=3e5813aebc4a1ebbc1a3f2452b3d374d623097f426393f5d91a22bc74d5323ca&voucherCode=LIFECCB09

https://shopee.vn/search?promotionId=60602370&signature=3e5813aebc4a1ebbc1a3f2452b3d374d623097f426393f5d91a22bc74d5323ca&voucherCode=ELCCB1110
// other: https://shopee.vn/voucher-details/CCB100K1011/60683453/5a56a47f9c89e3138b83085318159daa7f32401808d9ac2f43a4318c3da0f039

//// reverse
// example: https://shopee.vn/search?promotionId=60602370&signature=3e5813aebc4a1ebbc1a3f2452b3d374d623097f426393f5d91a22bc74d5323ca&voucherCode=LIFECCB09
const urlParams = new URLSearchParams(window.location.search);
var path = `/voucher-details/${urlParams.get('voucherCode')}/${urlParams.get('promotionId')}/${urlParams.get('signature')}`;
window.history.pushState("",null,path);
