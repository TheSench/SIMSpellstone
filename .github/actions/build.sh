
declare -a actions=("download-files" "extract-assets" "extract-images" "resize-images" "update-spritesheets" "update-data")
 
for action in "${actions[@]}"
do
    echo "Building $action"
    pushd $action
    npm install
    npm run build
    sed -i 's/${__dirname}/\./g' ./dist/index.mjs
    popd
done
