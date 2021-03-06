/***
 * 加载笔记本
 */
function loadNoteBook(){
	$.ajax({
		url:"notebook.do",
		method:"get",
		success:function (data) {
			var special = data['special'];
            var normal = data['normal'];
            var list = $('#first_side_right .contacts-list');
            //	绑定特殊笔记本
            for (var i = 0; i < special.length; i++) {
            	var nb = special[i];
            	switch (nb.name) {
					case '回收站':
						$('#rollback_button').data("notebook", nb);
						break;
                    case '收藏':
                        $('#like_button').data("notebook", nb);
                        break;
                    case '活动':
                        $('#action_button').data("notebook", nb);
                        break;
                    case '默认':
                        $('#first_side_right .contacts-list li:first').data("notebook", nb);
                        break;
                }
			}
            //	绑定普通笔记本
            for (var i = 0; i < normal.length; i++) {
                var nb = normal[i];
                list.append('<li class="online">\n' +
                    '<a class=\'unchecked\'>\n' +
                    '<i class="fa fa-book" title="笔记本" rel="tooltip-bottom"></i>' +
					nb.name +
                    '<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button>\n' +
                    '</a>\n' +
                    '</li>');
                $('#first_side_right .contacts-list li:last').data("notebook", nb);
            }
        }
	})
}

/****
 * 添加笔记本
 */
function addNoteBook(){
	var name = $('#input_notebook').val().trim();
	if (name == null || name.length == 0) {
        sweetAlert("出错了！", "笔记本名称不能为空", "error")
		return;
	}
	$.ajax({
		url:"notebook.do",
		method:"post",
		data:{name:name},
		success:function (data) {
			if (data['success']) {
                sweetAlert("恭喜你！", "添加笔记本成功", "success");
                var nb = data['notebook'];
                //	关闭弹出框
				$('.cancle').click();
				//	新添加的节点放置在普通笔记本的第一位
                $('#first_side_right .contacts-list li:first')
					.after('<li class="online">\n' +
                        '<a class=\'unchecked\'>\n' +
                        '<i class="fa fa-book" title="笔记本" rel="tooltip-bottom"></i>' +
                        nb.name +
                        '<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button>\n' +
                        '</a>\n' +
                        '</li>');
                $('#first_side_right .contacts-list li:first').next().data('notebook', nb);
                //	新加入笔记本被选中状态
                $('#first_side_right .contacts-list li:first').next().click();
			} else if (data['name_null']){
                sweetAlert("出错了！", "笔记本名称不能为空", "error");
			} else if (data['name_repeat']){
                sweetAlert("出错了！", "笔记本名称已存在", "error");
            }
        }
	})
}

/***
 * 重命名笔记本
 */
function updateNoteBook(){
	alert("重命名笔记本");
}

/***
 * 删除笔记本
 */
function deleteNoteBook(){
	alert("删除笔记本");
}

/**
 * 将笔记本列表放置到select组件中
 */
function setNoteBookToSelect(){
	console.log("将笔记本列表放置到select组件中");
}