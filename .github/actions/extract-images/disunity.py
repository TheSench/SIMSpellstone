
import UnityPy
import sys, os, json

file = sys.argv[-1] # last argument
out = file[:file.rindex('\\') + 1] # output path
folder = file[len(out) : file.index('.unity3d')] + '\\' # output folder for extracted assets
out += folder

bundle = UnityPy.load(file)

textures, mono = {}, []

for obj in bundle.objects:
	if obj.type.name == 'Texture2D':
		data = obj.read()
		textures[obj.path_id] = data.image
	elif obj.type.name == 'MonoBehaviour':
		mono.append(obj)

for obj in mono:
	data = obj.read_typetree()
	if not data.get('textures'): continue
	texture_id = data['textures'][0]['m_PathID']
	if texture_id not in textures: continue
	texture = textures[texture_id]
	os.makedirs(out, exist_ok = True)
	name = data['spriteCollectionName']
	with open(out + name + '.json', 'w') as f: json.dump(data, f, indent = 4)
	texture.save(out + name + '.png')
