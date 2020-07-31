from flask import Flask, request, render_template, url_for, redirect
import function
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/robot', methods=['GET', 'POST'])
def robot():
    if request.method == 'POST':
        title = request.form.get('title')
        content = request.form.get('content')
        # robot part
        return function.final_model(title, content)
    return redirect(url_for('index'))

@app.route('/result', methods=['GET', 'POST'])
def result():
    if request.method == 'POST':
        result = request.form.get('result')
        if result == '1':
            return '怎麼樣 ~~~ 屌不屌 ~~~'
        elif result == '2':
            return '好歐 凸^^凸'
        elif 'flag' == result:
            return 'Flag{不要再亂戳拉就寫很爛了吼}'
        else:
            return '還想打 CTF 啊！！！！'
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.debug = True
    app.run()