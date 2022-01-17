#!/usr/bin/env fish
function create-new-question --argument question_name
  set -q question_name[1]; or begin
    echo "Please enter the name of the new question."   
    exit 1
  end

  echo "Creating new question: $question_name"
  mkdir -p src/$question_name
  set safe_question_name (echo $question_name | sed 's/[^a-zA-Z0-9]//g')
  echo $safe_question_name
  echo """
  function $safe_question_name() {
    throw new Error(\"This solution has not been implemented yet.\")
  }
  export {$safe_question_name}

  """ > src/$question_name/solution.ts

  echo """
    import {$safe_question_name} from './solution'
    test('$safe_question_name', () => {
      expect(true).toBe(false)
    })
    
  """ > src/$question_name/question.test.ts
  touch src/$question_name/question.md
end

create-new-question $argv