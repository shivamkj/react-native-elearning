const initialState = {
  data: null,
  currentQuestion: 0,
  currentSection: 0,
  selectedOptions: [],
  queStatus: null,
  attemptSummary: [0, 1, 0, 0, 0],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OptionSelected':
      state.selectedOptions[state.currentQuestion] = action.optIndex;
      return {...state};
    case 'ClearResponse':
      state.selectedOptions[state.currentQuestion] = undefined;
      changeStatus(state.currentQuestion, 1, state);
      return {...state};
    case 'SaveQuestion':
      saveQuestion(action.isMarked, state);
      return {...state};
    case 'ChangeQuestion':
      state.currentQuestion = action.queNum;
      if (state.queStatus[action.queNum] == 2)
        changeStatus(action.queNum, 1, state);
      return {...state};
    case 'ChangeSection':
      state.currentSection += 1;
      const totalQuestions1 = state.data[state.currentSection].question.length;
      state.attemptSummary = [0, 1, totalQuestions1 - 1, 0, 0];
      state.queStatus = Array(totalQuestions1).fill(2);
      state.queStatus[0] = 1;
      state.currentQuestion = 0;
      state.selectedOptions = Array(totalQuestions1);
      return {...state};
    case 'TestStarted':
      const initialState = {
        data: null,
        currentQuestion: 0,
        currentSection: 0,
        selectedOptions: [],
        queStatus: null,
        attemptSummary: [0, 1, 0, 0, 0],
      };
      const totalQuestions2 = action.sections[0].question.length;
      initialState.queStatus = Array(totalQuestions2).fill(2);
      initialState.queStatus[0] = 1;
      initialState.attemptSummary[2] = totalQuestions2 - 1;
      initialState.data = action.sections;
      return {...initialState};
    default:
      return state;
  }
};

const saveQuestion = (isMarked, state) => {
  const {currentQuestion, currentSection} = state;
  const selectedOption = state.selectedOptions[currentQuestion];
  if (isMarked) {
    if (selectedOption == undefined) changeStatus(currentQuestion, 3, state);
    else changeStatus(currentQuestion, 4, state);
  } else if (selectedOption != undefined)
    changeStatus(currentQuestion, 0, state);
  if (currentQuestion + 1 < parseInt(state.data[currentSection].qtn_cnt)) {
    state.currentQuestion += 1;
    if (state.queStatus[currentQuestion + 1] == 2)
      changeStatus(currentQuestion + 1, 1, state);
  }
};

const changeStatus = (queNum, newStatus, state) => {
  const oldStatus = state.queStatus[queNum];
  state.queStatus[queNum] = newStatus;
  state.attemptSummary[newStatus] += 1;
  state.attemptSummary[oldStatus] -= 1;
};

export {initialState, reducer};
