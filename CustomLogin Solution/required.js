var userLogin = function(username, password){
	var loginFailed = true;
	if(username == "systemadmin"){
		return false; //revert to directory authentication
	} else {
		if(ds.User.length != 0){
			var userEntity = ds.User.find("username == :1", username);
			if(userEntity != null){
				loginFailed = !userEntity.validatePassword(password)
			}
		} else {
			//create a default user for new installations and login
			var userPerson = new ds.Person({firstName: "Admin", lastName: "User"});
			userPerson.save();
			var userEntity = new ds.User({username: username, password: password, userPerson: userPerson});
			userEntity.save();
			var adminGroup = new ds.Group({directoryID: directory.group("AccountAdmin").ID, user: userEntity});
			adminGroup.save();
			loginFailed = false;
		}

		if(!loginFailed){
			//creating string array of group ids
			var groupsArr = [];
			userEntity.groups.forEach(function (group){
				groupsArr.push(group.directoryID);
			})
			var userObject = {
				ID: userEntity.ID,
				name: userEntity.username,
				fullName: userEntity.username,
				belongsTo: groupsArr
			}
			return userObject;
		} else {
			return {error: 100, errorMessage: "Login failed."};
		}
	}
}
