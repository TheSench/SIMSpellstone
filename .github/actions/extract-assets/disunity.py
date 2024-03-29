
import UnityPy
import sys, os, json
import logging

file = sys.argv[-1] # last argument
out = os.path.dirname(file) # output path
folder = file[len(out) : file.index('.unity3d')] + '/' # output folder for extracted assets
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
	try:
		data = obj.read_typetree()
		if not data.get('textures'): continue
		texture_id = data['textures'][0]['m_PathID']
		if texture_id not in textures: continue
		texture = textures[texture_id]
		os.makedirs(out, exist_ok = True)
		name = data['spriteCollectionName']
		with open(out + name + '.json', 'w') as f: json.dump(data, f, indent = 4)
		texture.save(out + name + '.png')
	except Error as ex:
		print('Error while extracting', obj.path_id)
		logging.exception(ex)
		raise
