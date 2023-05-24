import json
def read_json():
	try:
		with open('sample_data.json','r',encoding='utf-8-sig') as file:
			data=json.load(file)
		#読み取れた時
		#print('読み取り成功')
		#print(data)
		return data

	except FileNotFoundError:
		#ファイルが見つからないとき
		print('ファイルが見つかりません')
  
	except json.JSONDecodeError:
		#解析エラー
		print('解析エラー')
  
	except Exception as e:
		#その他のエラー発生
		print('エラー発生',str(e))

if __name__ == '__main__':
	read_json()