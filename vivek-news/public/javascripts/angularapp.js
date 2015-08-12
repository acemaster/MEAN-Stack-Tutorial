var app = angular.module('VivekNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
  .state('post',{
      url: '/post/{id}',
      templateUrl: '/post.html',
      controller: 'PostCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);



app.factory('posts',[function(){
	var o = {
    posts: [
    {title: 'post 1', link: "#", upvotes: 3},
	{title: 'post 2', link: "#", upvotes: 2},
	{title: 'post 3', link: "#", upvotes: 1},
	{title: 'post 4', link: "#", upvotes: 4},
	{title: 'post 5', link: "#", upvotes: 2}]
    };
  return o;

}]);

app.controller('PostCtrl',[
  '$scope',
  '$stateParams',
'posts',
function($scope,$stateParams,posts){
   $scope.post = posts.posts[$stateParams.id];
   $scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};
}]);


app.controller('MainCtrl', [
'$scope',
'posts',
function($scope,posts){
  $scope.test = 'Hello world!';
  $scope.posts=posts.posts;

$scope.addpost= function(){
	if($scope.title || $scope.title!='')
		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0, comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]});
	$scope.title="";
	$scope.link="";
}
$scope.upvote=function(post){
	post.upvotes+=1;
}
}]);
