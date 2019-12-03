	
	let frm = '<form><div class="form-row"><div class="col-md-4 mb-3"><label for="validationDefault01">First name</label><input type="text" class="form-control" id="validationDefault01" value="Mark" required></div><div class="col-md-4 mb-3"><label for="validationDefault02">Last name</label><input type="text" class="form-control" id="validationDefault02" value="Wilson" required></div></div><div class="form-group"><label class="sr-only" for="inlineFormInputGroupUsername2">Username</label><div class="input-group mb-2 mr-sm-2"><div class="input-group-prepend"><div class="input-group-text">@</div></div><input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"><small id="passwordHelpInline" class="text-muted">Must be 8-20 characters long.</small></div></div><div class="form-row align-items-center"><div class="col-auto my-1"><label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label><select class="custom-select mr-sm-2" id="inlineFormCustomSelect"><option selected>Em</option><option value="1">tel</option></select></div></div></form>'
	

	$('#add_el').click(function() {
        $('#main').append(frm);
    });

    $('#del').click(function () {
        $('.forms').last().remove();
    });
