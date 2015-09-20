$(function(){
  $("#upload").bind("drop", function(e){
    e.preventDefault();
    // ファイル情報を取得
    var files = e.originalEvent.dataTransfer.files;
    uploadFiles(files);
  }).bind('dragenter', function(){
    // デフォルトの挙動を停止
    return false;
  }).bind('dragover', function(){
    // デフォルトの挙動を停止
    return false;
  });;
});

function uploadFiles(files) {
  // FormDataオブジェクトを用意
  var fd = new FormData();
  var filesLength = files.length;
  Object.keys(files).forEach(function(i){
    fd.append("files[]", files[i]);
  });
  // Ajaxでアップロード処理をするファイルへ内容渡す
  var jqxhr = $.ajax({
    url: '/upload',
    type: 'POST',
    data: fd,
    processData: false,
    contentType: false,
    success: function(data) {
      console.log('ファイルがアップロードされました。');
    }
  });
  // Set another completion function for the request above
  jqxhr.always(function() {
    alert( "second complete" );
  });
}
