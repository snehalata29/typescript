const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
  };
  
  console.log(fetchedUserData?.job?.title);// optional chaining
  
  const userInput = undefined;
  
  const storedData = userInput ?? 'DEFAULT';// nullish coalescing
  
  console.log(storedData);