npm init -y
npm install express axios
npm install ts-node ts-node-dev typescript @types/node @types/express -D

tsc --init

(Get-Content tsconfig.json) -replace '// "outDir": "./"', '"outDir": "./build"' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "rootDir": "./"', '"rootDir": "./src"' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '"module":\s*"\w+"', '"module": "Node16"' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '"target": \s*"\w+"', '"target": "es2022"' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "resolveJsonModule": \s*\w+', '"resolveJsonModule": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '//\s*"types":\s*\[\]', '"types": ["node"]' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noImplicitAny": \s*\w+', '"noImplicitAny": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "strictNullChecks": \s*\w+', '"strictNullChecks": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "strictFunctionTypes": \s*\w+', '"strictFunctionTypes": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "strictBindCallApply": \s*\w+', '"strictBindCallApply": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "strictPropertyInitialization": \s*\w+', '"strictPropertyInitialization": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "strictBuiltinIteratorReturn": \s*\w+', '"strictBuiltinIteratorReturn": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noImplicitThis": \s*\w+', '"noImplicitThis": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "useUnknownInCatchVariables": \s*\w+', '"useUnknownInCatchVariables": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "alwaysStrict": \s*\w+', '"alwaysStrict": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noUnusedLocals": \s*\w+', '"noUnusedLocals": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noUnusedParameters": \s*\w+', '"noUnusedParameters": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "exactOptionalPropertyTypes": \s*\w+', '"exactOptionalPropertyTypes": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noImplicitReturns": \s*\w+', '"noImplicitReturns": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noFallthroughCasesInSwitch": \s*\w+', '"noFallthroughCasesInSwitch": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noUncheckedIndexedAccess": \s*\w+', '"noUncheckedIndexedAccess": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noImplicitOverride": \s*\w+', '"noImplicitOverride": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "noPropertyAccessFromIndexSignature": \s*\w+', '"noPropertyAccessFromIndexSignature": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "allowUnusedLabels": \s*\w+', '"allowUnusedLabels": true' | Set-Content tsconfig.json
(Get-Content tsconfig.json) -replace '// "allowUnreachableCode": \s*\w+', '"allowUnreachableCode": true' | Set-Content tsconfig.json

$content = Get-Content tsconfig.json -Raw

if ($content -notmatch '"include"\s*:\s*\[') {
    $content = $content -replace '}\s*$', ', "include": ["src/**/*", "test/**/*"] }'
}

if ($content -notmatch '"exclude"\s*:\s*\[') {
    $content = $content -replace '}\s*$', ', "exclude": ["node_modules", "build", "env"] }'
}

Set-Content tsconfig.json $content



mkdir -p src
echo "" > ./src/videogames.ts
mkdir -p build
mkdir -p test
mkdir -p env
echo "" > ./env/.env.dev

mkdir -p ./src/shared
echo "" > ./src/shared/Environment.ts
mkdir -p ./src/mvc-games
mkdir -p ./src/mvc-users
mkdir -p ./src/express
echo "" > ./src/express/Server.ts

mkdir -p ./src/mvc-games/view
echo "" > ./src/mvc-games/view/GameView.ts
mkdir -p ./src/mvc-games/controller
echo "" > ./src/mvc-games/controller/GameController.ts
mkdir -p ./src/mvc-games/model
echo "" > ./src/mvc-games/model/GameModel.ts
echo "" > ./src/mvc-games/model/DBInitializer.ts
echo "" > ./src/mvc-games/model/Scrapper.ts
mkdir -p ./src/mvc-games/types
echo "" > ./src/mvc-games/types/GameInterface.ts
mkdir -p ./src/mvc-games/factory
echo "" > ./src/mvc-games/factory/GameFactory.ts


mkdir -p ./src/mvc-users/view
echo "" > ./src/mvc-users/view/UserView.ts
mkdir -p ./src/mvc-users/controller
echo "" > ./src/mvc-users/controller/UserController.ts
mkdir -p ./src/mvc-users/model
echo "" > ./src/mvc-users/model/UserModel.ts
mkdir -p ./src/mvc-users/types
echo "" > ./src/mvc-users/types/UserInterface.ts
mkdir -p ./src/mvc-users/factory
echo "" > ./src/mvc-users/factory/UserFactory.ts

