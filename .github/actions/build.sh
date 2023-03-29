
declare -a actions=("download-files" "extract-assets" "extract-images" "resize-images" "update-spritesheets")
 
for action in "${actions[@]}"
do
    pushd $action
    npm install
    npm run build
    sed -i 's/${__dirname}/\./g' ./dist/index.mjs
    popd
done
