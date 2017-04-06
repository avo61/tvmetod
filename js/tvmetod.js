        var disk1Select = document.querySelector('#disk1');
        var disk2Select = document.querySelector('#disk2');
        var disk3Select = document.querySelector('#disk3');
        var disk4Select = document.querySelector('#disk4');

        var info1 = document.querySelector('#info1');
        var info2 = document.querySelector('#info2');
        var info3 = document.querySelector('#info3');
        var info4 = document.querySelector('#info4');

        //--------------------------------

        var radioSelectCarousel1 = document.querySelector('#slide1');
        var radioSelectCarousel2 = document.querySelector('#slide2');
        var radioSelectCarousel3 = document.querySelector('#slide3');
        var tvmBaners = document.querySelector('.tvm-baners');

        var stepBaner = 0;
        var deltaBaner = 1;
        //--------------------------------


        var formaCheck1 = document.querySelector('#formaIP');
        var formaCheck2 = document.querySelector('#formaYR');

        var radioCheck1 = document.querySelector('#option-1');
        var radioCheck2 = document.querySelector('#option-2');
        var radioCheck3 = document.querySelector('#option-3');
        var radioCheck4 = document.querySelector('#option-4');

        var checkbox1 = document.querySelector("#checkbox-1");
        var checkbox2 = document.querySelector("#checkbox-2");
        var checkbox3 = document.querySelector("#checkbox-3");
        var checkbox4 = document.querySelector("#checkbox-4");

        var docCount = document.querySelector('#cntDoc');
        var operCount = document.querySelector('#cntOper');
        var userCount = document.querySelector('#cntUser');
        var summa = document.querySelector('#summa');
        var metod = [0, 0, 800, 600, 700, 700, 0, 0, 0, 0, 0, 1800, 1600, 1700, 1700, 0];
        //----------------------------------------------------------------------------
        var timerId = setInterval(function() {
            stepBaner = stepBaner + deltaBaner;
            tvmBaners.classList.remove('tvm-baners__select1');
            tvmBaners.classList.remove('tvm-baners__select2');
            tvmBaners.classList.remove('tvm-baners__select3');
            switch (stepBaner) {
                case 0:
                    deltaBaner = 1;
                    stepBaner = 2;
                    radioSelectCarousel2.checked = true;
                    tvmBaners.classList.add('tvm-baners__select2');
                    break;

                case 1:
                    tvmBaners.classList.add('tvm-baners__select1');
                    radioSelectCarousel1.checked = true;
                    break;

                case 2:
                    radioSelectCarousel2.checked = true;
                    tvmBaners.classList.add('tvm-baners__select2');
                    break;

                default:
                    radioSelectCarousel3.checked = true;
                    tvmBaners.classList.add('tvm-baners__select3');
                    deltaBaner = -1;
            }

        }, 30000);

        radioSelectCarousel1.addEventListener("click", function(event) {
            // event.preventDefault();
            tvmBaners.classList.remove('tvm-baners__select2');
            tvmBaners.classList.remove('tvm-baners__select3');
            tvmBaners.classList.add('tvm-baners__select1');
            deltaBaner = 1;
            stepBaner = 1;
            // console.log("Клик по ссылке ");
        });
        radioSelectCarousel2.addEventListener("click", function(event) {
            // event.preventDefault();
            tvmBaners.classList.remove('tvm-baners__select1');
            tvmBaners.classList.remove('tvm-baners__select3');
            tvmBaners.classList.add('tvm-baners__select2');
            deltaBaner = 1;
            stepBaner = 2;
            // console.log("Клик по ссылке ");
        });
        radioSelectCarousel3.addEventListener("click", function(event) {
            // event.preventDefault();
            tvmBaners.classList.remove('tvm-baners__select1');
            tvmBaners.classList.remove('tvm-baners__select2');
            tvmBaners.classList.add('tvm-baners__select3');
            deltaBaner = -1;
            stepBaner = 3;
            // console.log("Клик по ссылке ");
        });




        //-------------------------------------------------------------------------
        disk1Select.addEventListener("mouseover", function(event) {
            // event.preventDefault();

            info1.classList.add('tvm-baner3-info--visible');

            // console.log("Навели мышь ");
        });
        disk1Select.addEventListener("mouseout", function(event) {
            // event.preventDefault();

            info1.classList.remove('tvm-baner3-info--visible');

            // console.log("Убрали с мыши ");
        });

        disk2Select.addEventListener("mouseover", function(event) {
            // event.preventDefault();

            info2.classList.add('tvm-baner3-info--visible');

            // console.log("Навели мышь ");
        });
        disk2Select.addEventListener("mouseout", function(event) {
            // event.preventDefault();

            info2.classList.remove('tvm-baner3-info--visible');

            // console.log("Убрали с мыши ");
        });

        disk3Select.addEventListener("mouseover", function(event) {
            // event.preventDefault();

            info3.classList.add('tvm-baner3-info--visible');

            // console.log("Навели мышь ");
        });
        disk3Select.addEventListener("mouseout", function(event) {
            // event.preventDefault();

            info3.classList.remove('tvm-baner3-info--visible');

            // console.log("Убрали с мыши ");
        });

        disk4Select.addEventListener("mouseover", function(event) {
            // event.preventDefault();

            info4.classList.add('tvm-baner3-info--visible');

            // console.log("Навели мышь ");
        });
        disk4Select.addEventListener("mouseout", function(event) {
            // event.preventDefault();

            info4.classList.remove('tvm-baner3-info--visible');

            // console.log("Убрали с мыши ");
        });
        //---------------------------------------------------------------------------------------

        formaCheck1.addEventListener("click", eventCheck);
        formaCheck2.addEventListener("click", eventCheck);

        radioCheck1.addEventListener("click", eventCheck);
        radioCheck2.addEventListener("click", eventCheck);
        radioCheck3.addEventListener("click", eventCheck);
        radioCheck4.addEventListener("click", eventCheck);

        checkbox1.addEventListener("click", eventCheck);
        checkbox2.addEventListener("click", eventCheck);
        checkbox3.addEventListener("click", eventCheck);
        checkbox4.addEventListener("click", eventCheck);

        docCount.addEventListener("mouseup", eventCheck);
        docCount.addEventListener("mousedown", eventCheck);
        docCount.addEventListener("mousemove", eventCheck);

        operCount.addEventListener("mouseup", eventCheck);
        operCount.addEventListener("mousedown", eventCheck);
        operCount.addEventListener("mousemove", eventCheck);

        userCount.addEventListener("mouseup", eventCheck);
        userCount.addEventListener("mousedown", eventCheck);
        userCount.addEventListener("mousemove", eventCheck);

        docCount.addEventListener("touchstart", eventCheck);
        docCount.addEventListener("touchend", eventCheck);
        docCount.addEventListener("touchmove", eventCheck);

        operCount.addEventListener("touchstart", eventCheck);
        operCount.addEventListener("touchend", eventCheck);
        operCount.addEventListener("touchmove", eventCheck);

        userCount.addEventListener("touchstart", eventCheck);
        userCount.addEventListener("touchend", eventCheck);
        userCount.addEventListener("touchmove", eventCheck);


        eventCheck();

        function eventCheck(event) {

            var docCnt = docCount.value;
            var operCnt = operCount.value;
            var userCnt = userCount.value;
            var radioValue = 0;
            var s = 0;
            var d1 = 0;
            var d2 = 0;
            var d3 = 0;
            var n1 = 0;
            var n2 = 0;
            var n3 = 0;
            var n4 = 0;

            var forma = formaCheck1.checked * formaCheck1.value + formaCheck2.checked * formaCheck2.value;
            var nn = radioCheck1.checked * radioCheck1.value + radioCheck2.checked * radioCheck2.value + radioCheck3.checked * radioCheck3.value + radioCheck4.checked * radioCheck4.value;
            // console.log("forma = ", forma, "налог = ", nn, "doc = ", docCnt, "oper = ", operCnt, "user = ", userCnt);


            // if (docCnt <= 14) {
            // d1 = 10;
            // } else {
            d1 = docCnt * 1 + 10 - ((docCnt % 10) >= 5 ? (docCnt % 10) : ((docCnt % 10) + 10));
            // };


            // if (operCnt <= 14) {
            // d2 = 10;
            // } else {
            d2 = operCnt * 1 + 10 - ((operCnt % 10) >= 5 ? (operCnt % 10) : ((operCnt % 10) + 10));
            // };

            // if (userCnt <= 7) {
            // d3 = 5;
            // } else if (userCnt <= 14) {
            // d3 = 10;
            // } else {
            d3 = userCnt * 1;
            // d3 = userCnt * 1 + 10 - ((userCnt % 10) >= 5 ? (userCnt % 10) : ((userCnt % 10) + 10));
            // };

            docCount.value = d1;
            operCount.value = d2;
            userCount.value = d3;
            userCount.innerHTML = "";
            s = metod[nn + forma] + d1 * 100 + d2 * 100 + d3 * 300;
            // console.log("d1 d2 d3 s", d1, d2, d3, s);
            n1 = checkbox1.checked * checkbox1.value;
            // if (n1 == 0) n1 = 1;

            n2 = checkbox2.checked * checkbox2.value;
            // if (n2 == 0) n2 = 1;

            n3 = checkbox3.checked * checkbox3.value;
            // if (n3 == 0) n3 = 1;

            n4 = checkbox4.checked * checkbox4.value;
            // if (n4 == 0) n4 = 1;

            s = Math.round(s * (((n1 + n2 + n3 + n4) % 100) + 100) / 100);
            // console.log("n1 n2 n3 n4 s", n1, n2, n3, n4, s);
            // console.log("ceck1 = ", n1, n2, n3, n4);
            //  s = metod[nn + forma] + docCnt * 100 + operCnt * 100 + userCnt * 300;
            // console.log("docCnt = ", docCnt, d);

            // if (radioCheck1.checked == true) {
            //     radioValue = radioCheck1.value;

            // } else if (radioCheck2.checked == true) {
            //     radioValue = radioCheck2.value;
            // } else if (radioCheck3.checked == true) {
            //     radioValue = radioCheck3.value;
            // };
            // s = radioValue * (docCnt + userCnt * 10);

            document.querySelector('#cnt-doc').innerHTML = d1;
            document.querySelector('#cnt-cnt').innerHTML = d2;
            document.querySelector('#cnt-usr').innerHTML = d3;
            summa.innerHTML = s.toString(10).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + "<sup>*</sup>";

            // console.log(radioValue, docCnt, userCnt);

        }