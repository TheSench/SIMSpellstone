
declare -a actions=("download-files" "extract-assets" "extract-images" "resize-images" "update-spritesheets")
 
for action in "${actions[@]}"
do
    pushd $action
    npm run build
    sed -i 's/${__dirname}/\./g' targetfile
    popd
done
