var aProvince = ['河北省', '山西省', '湖北省']

var iNum1, iNum2;
var aCity = [
    ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口'],
    ['太原市', '大同市', '长治市'],
    ['武汉市 ', '黄石市', '荆州市']
];
var aCountry = [[
    ['即新华区', '桥西区', '桥东区', '长安区', '裕华区'],
    ['玉田', '滦县', '滦南', '迁西', '乐亭']
    ]];
    $(function () {
        for (var i = 0; i < aProvince.length; i++) {
            $('#selProvince').append('<option>' + aProvince[i] + '</option>');
        }
        //找到当前被选中的 option 的对象
        $('#selProvince').change(function () {
            $('#selCity').children().not(":eq(0)").remove();
            //获取索引
            iNum1 = $(this).children('option:selected').index();
            var __aCity = aCity[iNum1 - 1];

            for (var j = 0; j < __aCity.length; j++) {
                $('#selCity').append('<option>' + __aCity[j] + '</option>');
            }
        });

        $('#selCity').change(function () {
            $('#selCountry').children().not(":eq(0)").remove();
            //获取索引
            iNum2 = $(this).children('option:selected').index();
            var __aCountry = aCountry[iNum1 - 1][iNum2 -1];

            for (var k = 0; k < __aCountry.length; k++) {
                $('#selCountry').append('<option>' + __aCountry[k] + '</option>');
            }
        })


    });
