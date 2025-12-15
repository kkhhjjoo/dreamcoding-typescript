{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  //function: login -> success, fail
  // type SuccessState = {
  //   response: {
  //     body: string;
  //   };
  // };
  // type FailState = {
  //   reason: string;
  // };
  // type LoginState = SuccessState | FailState

  // function login(id: string, password: string):Promise<LoginState> {
  //   return {
  //     response: {
  //       body: 'logged in!'
  //     }
  //   }
  // }

  //printLoginState(state)
  //success -> 🎇body
  //fail -> 😭 reason

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function printLoginState(state:LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body, '🎇');
    } else if (state.result === 'fail') { 
      console.log(state.reason, '😭');
    }
  }
  printLoginState({ result: 'success', response: { body: 'Logged in' } });
  printLoginState({ result: 'fail', reason: 'Invalid password' });
}