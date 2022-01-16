#!/usr/bin/env fish
function create-new-question --argument question_name
  set -q question_name[1]; or begin
    echo "Please enter the name of the new question."   
    exit 1
  end

  echo "Creating new question: $question_name"
  mkdir -p src/$question_name
  touch src/$question_name/question.ts
  touch src/$question_name/question.test.ts
  touch src/$question_name/question.md
end

create-new-question $argv