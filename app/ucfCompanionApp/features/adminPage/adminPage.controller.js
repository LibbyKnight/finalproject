angular
    .module('ucfCompanionApp.adminPage') // No array, as we are "extending" the module
    .controller('AdminPageCtrl', AdminPageCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)


function AdminPageCtrl($stateParams) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view
	
	vm.addVideo = function() {

		getVideo.addVideo(vm.getVideo.category, vm.getVideo.videoName, vm.getVideo.videoLink, vm.getVideo.trancript);



		vm.newVideo = {

			catergory: '',

			videoName: '',

			videoLink: '',

			trancript: ''

		}

	}
	}  	


