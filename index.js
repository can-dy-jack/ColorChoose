Vue.component('colortemplate',{
    props: ['toget'],
    template: '<div class="column colorbox"><h4>{{toget.ColorText}}</h4><p>{{toget.Color}}</p><textarea name="copy" class="copy-content" style="opacity: 0">{{toget.Color}}</textarea></div>'
})

var app = new Vue({
    el: '#color',
    data: {
        message: 'vue',
        selectColor: [
            {id: '0',ColorText: '鹅黄色', Color: '#fff143'},
            {id: '1',ColorText: '鸭黄色', Color: '#faff72'},
            {id: '2',ColorText: '樱草色', Color: '#eaff56'},
            {id: '3',ColorText: '柳黄色', Color: '#c9dd22'},
            {id: '4',ColorText: '嫩绿', Color: '#bddd22'}
        ],
        selectColor2: [
            {id: '0',ColorText: '蔚蓝色', Color: '#70f3ff'},
            {id: '1',ColorText: '蓝色', Color: '#44cef6'},
            {id: '2',ColorText: '碧蓝色', Color: '#3eede7'},
            {id: '3',ColorText: '靛青色', Color: '#177cb0'},
            {id: '4',ColorText: '石青色', Color: '#1685a9'},
            {id: '5',ColorText: '靛蓝色', Color: '#065279'}
        ],
        selectColor3: [
            {id: '0',ColorText: '纯白', Color: '#ffffff'},
            {id: '1',ColorText: '铅白', Color: '#f0f0f4'},
            {id: '2',ColorText: '银白', Color: '#e9e7ef'},
            {id: '3',ColorText: '雪白', Color: '#f0fcff'},
            {id: '4',ColorText: '霜白', Color: '#e9f1f6'},
            {id: '5',ColorText: '月白', Color: '#d6ecf0'},
            {id: '6',ColorText: '象牙白', Color: '#fffbf0'},
            {id: '7',ColorText: '白粉', Color: '#fff2df'},
            {id: '8',ColorText: '鱼肚白', Color: '#fcefe8'},
            {id: '9',ColorText: '缟', Color: '#f2ecde'},
            {id: '10',ColorText: '荼白', Color: '#f3f9f1'},
            {id: '11',ColorText: '鸭卵青', Color: '#e0eee8'},
            {id: '12',ColorText: '素', Color: '#e0f0e9'},
            {id: '13',ColorText: '青白', Color: '#c0ebd7'},
            {id: '14',ColorText: '蟹壳青', Color: '#bbcdc5'},
            {id: '15',ColorText: '花白', Color: '#c2ccd0'},
            {id: '16',ColorText: '老银', Color: '#bacac6'},
            {id: '17',ColorText: '水色', Color: '#88ada6'},
            {id: '18',ColorText: '苍色', Color: '#75878a'},
            {id: '19',ColorText: '灰色', Color: '#808080'}
        ],
        selectColor4: [
            {id: '0',ColorText: '朱砂', Color: '#ff461f'},
            {id: '1',ColorText: '火红', Color: '#ff2d51'},
            {id: '2',ColorText: '妃色', Color: '#ed5736'},
            {id: '3',ColorText: '朱膘', Color: '#f36838'},
            {id: '4',ColorText: '洋红', Color: '#ff4777'},
            {id: '5',ColorText: '品红', Color: '#f00056'},
            {id: '6',ColorText: '粉红', Color: '#ffb3a7'},
            {id: '7',ColorText: '桃红', Color: '#f47983'},
            {id: '8',ColorText: '海棠红', Color: '#db5a6b'},
            {id: '9',ColorText: '樱桃色', Color: '#c93756'},
            {id: '10',ColorText: '酡颜', Color: '#f9906f'},
        ],
        selectColor5: [
            {id: '0',ColorText: '松花色', Color: '#bce672'},
            {id: '1',ColorText: '柳绿', Color: '#afdd22'},
            {id: '2',ColorText: '葱黄', Color: '#a3d900'},
            {id: '3',ColorText: '葱绿', Color: '#9ed900'},
            {id: '4',ColorText: '豆绿', Color: '#9ed048'},
            {id: '5',ColorText: '豆青', Color: '#96ce54'}
        ]
    }
})



