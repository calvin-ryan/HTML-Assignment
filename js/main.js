/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getCopyright(){
    const nowDate = new Date(Date.now());
    return 'Copyright &copy;' + nowDate.getFullYear();
}
$(document).ready(function(){
    console.log("in ready");
    const nowDate = new Date(Date.now());
    /*$('#copyright').html('Copyright &copy; ' + nowDate.getFullYear());*/
    $('#copyright').html(getCopyright());
})