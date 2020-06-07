console.log('hi');
//enum Role {ADMIN='admin', AUTHOR=4,READ_ONLY};
// enum Role {ADMIN='admin', AUTHOR,READ_ONLY}; //dont work
// enum Role {ADMIN=6, AUTHOR='admin',READ_ONLY};// dont work
enum Role {ADMIN=6, AUTHOR,READ_ONLY};
console.log(Role.ADMIN)
console.log(Role.AUTHOR)
console.log(Role.READ_ONLY)