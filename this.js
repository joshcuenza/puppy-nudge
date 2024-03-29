$('main').prepend(`<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,450,500,550,700,800&display=swap");

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0-modified | 20110126
   License: none (public domain)
*/
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 910px;
}

.puppy-nav .guide-items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #f5f6f8;
    padding: 6px 23px !important;

}

.puppy-nav .gx-inner-content>h3 {
    font-weight: 500;
}

li#foodList>.gx-main-container {
    display: block;
}

.puppy-nav .checkbox-item label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    height: 22px;
    left: 10px;
    position: absolute;
    top: 0px;
    width: 22px;
}

.puppy-nav .guide-items h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    font-weight: 500;
    margin-bottom: 0 !important;
    font-family: Roboto !important;
}

td,
th {
    text-align: left;
    padding: 14px 8px;
    width: 20%;
}

td>div {
    min-height: 63px;
    line-height: 18px;
}

table.gx-table li {
    line-height: 22px;
    font-size: 14px;
}

#fnwList tr:nth-child(even) {
    background-color: rgba(240, 241, 246, 0.5);

}

.gx-table strong {
    line-height: 20px;
}

#foodList tr:nth-child(6) {
    background-image: linear-gradient(to right, #848F91 33%, rgba(255, 255, 255, 0) 0%);
    background-position: bottom;
    background-size: 15px 1px;
    background-repeat: repeat-x;
}

.vector-div img {
    margin-bottom: 1vw;
}

#foodList td:nth-child(2),
#foodList tr:nth-child(2),
#foodList tr:nth-child(4),
#foodList tr:nth-child(6),
#foodList tr:nth-child(9),
#foodList tr:nth-child(11),
#foodList tr:nth-child(13) {
    background-color: rgba(240, 241, 246, 0.5);
}

.gx-product.gx-row-flex-center {
    width: 100%;
}

table.gx-table tr {
    width: 100%;
    max-width: 910px;
    font-family: Roboto !important ;;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
}

.vector-div {
    vertical-align: middle;
    text-align: center;
}

.vector-div>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
}

.puppy-nudge-header {
    display: flex;
    justify-content: center;
    background: #f5ead5;
    width: 100%;
    padding: 0;
    margin: 0;
}

.puppy-nudge-header>img {
    max-width: 100%;
    height: auto;
}

.puppy-body {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.puppy-content-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1400px;
    justify-content: flex-start;
}

.puppy-content {
    max-width: 960px;
    width: 100%;
    border: 1px solid #c6cfd0;
    font-family: Roboto !important ;;
    font-style: normal;
    border-radius: 5px;
}

.puppy-content>ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    border-radius: 5px;
}

.puppy-nav-list {
    flex-basis: 23%;
    max-width: 310px;

}

.puppy-nav {
    background: #f5f6f8;
    border: 1px solid #c6cfd0;
    border-radius: 5px;
    padding: 20px 0;
    margin-bottom: 20px;
}

.guide-items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #f5f6f8;
    padding: 18px 23px 0;
}

.guide-items-top {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.guide-items>h3 {
    font-size: 20px;
    line-height: 24px;
}

td:first-child,
th:first-child {
    text-align: left;
    padding: 14px;
}

.gx-inner-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1;
    margin-top: 5px;
}

.grey {
    background: #F5F6F8;
    border-radius: 4px;
    padding: 26px 35px 5px !important;
    margin-top: 5px;
}

div h3,
.gx-inner-content>h3 {
    font-family: Roboto !important ;;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    width: 100%;
}

.checkbox-item {
    position: relative;
    width: 50px;
}

.checkbox-item label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 28px;
}

.checkbox-item label:after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 6px;
    opacity: 0;
    position: absolute;
    top: 8px;
    /*-webkit-transform-origin: 0;
    transform-origin: top;*/

    transform: rotate(-55deg);
    width: 12px;
}

.checkbox-item input[type="checkbox"] {
    visibility: hidden;
}

.checkbox-item input[type="checkbox"]:checked+label {
    background-color: #1cb1b8;
    border-color: #1cb1b8;
}

.checkbox-item input[type="checkbox"]:checked+label:after {
    opacity: 1;
}

.guide-row {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.guide-content-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 960px;
}

.guide-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 15px;
}

.guide-header-wrap {
    max-width: 532px;
    width: 100%;
}

.fnw-guide-row .guide-header-wrap {
    max-width: 814px;
}

.guide-header-wrap-content>h4 {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 20px;
}

.img-description>p {
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
    margin: 10px 0 20px;
}

.add-me-to-cart.gx-added {
    visibility: visible !important;
    background: #2196F3;
    color: #FFF;
    border: 2px solid #2196F3;
}

.actual-guide {
    margin: 20px 0;
}

.actual-guide>h4 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-top: 20px;
}

.actual-guide>p {
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    margin-top: 10px;
}

.breed-size-filter {
    position: absolute;
    right: 15px;
    display: flex;
    flex-direction: row;
}

.recommended-puppy-treats-wrap>h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
}

.recommended-puppy-treats {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.puppy-content>ul>li {
    border-top: 1px solid #c6cfd0;
}

.puppy-content>ul>li:first-child {
    border: none;
}

.puppy-content>ul>li>.guide-items:hover {
    cursor: pointer;
}

.recommended-puppy-treats>div {
    flex-basis: 20%;
    height: 300px;
    border-radius: 4px;
    border: 1px solid pink;
}

.content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content {
    padding: 0 20px !important;
}

.guide-content-wrap>div {
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-basis: 50%;
}

.guide-content-wrap>div>div {
    width: 100%;
    padding: 0 20px;
}

.gx-inner-content>p {
    margin: 5px 0;
}

.gx-inner-content img {
    width: 100%;
    max-width: 440px;
    border-radius: 4px;
    margin: 20px 0;
}

div>p,
.gx-inner-content>p {
    list-style: disc;
    margin-bottom: 10px;
    font-family: Roboto !important ;;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    max-width: 910px;
}

.gx-inner-content li {
    line-height: 22px;
    list-style: disc;
    margin-bottom: 10px;
}

.gx-inner-content>div {
    padding: 20px 0 15px 20px;
    width: 100%;
}

.gx-row-flex-start {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.gx-col-flex {
    display: flex;
    flex-direction: column;
}


#root {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.add-me-to-cart {
    display: block;
    line-height: 37px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    width: 95%;
    background: rgb(239, 235, 99);
    border: 2px solid rgb(239, 235, 99);
    box-sizing: border-box;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
}

.gx-h1 {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    padding: 15px 0;
    float: left;
    width: 100%;
    left: 10px;
}

.product-item.product .wrap .details h3.product-name {
    height: auto;
    min-height: 57px;
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: normal;
    color: #000000;
    float: left;
    max-width: 225px;
    width: 100%;
}
#content .product-item.product h3{
    font-size: 16px !important;
}
#content .product-item.product .wrap .details div.price p.product-latest-rrp {
    font-size: 12px !important;
    line-height: 15px !important;
}

.gx-row-one.gx-row {
    justify-content: space-between;
    min-width: 910px;
}

#root>li {
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.gx-row-flex-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.gx-middle-container {
    width: 100%;
    padding: 10px;
    max-width: 910px;
    background: #F5F6F8;
    border-radius: 4px;
}

.gx-middle-container ul {
    list-style: disc;
    list-style-position: inside;
}

table ul {
    list-style: disc;
}

.gx-middle-container strong {
    line-height: 28px;
}

.gx-middle-container li {
    line-height: 28px;
}

select,
option {
    color: #4a4a4a !important;
    border-radius: 4px !important;
    font-size: 16px !important;
    padding: 5px !important;
    position: relative;
    width: 120px;
}

.select-wrapper {
    position: relative;
    background: transparent;
}

.select-wrapper::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    -webkit-transform-origin: 0;
    transform-origin: top;

    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    right: 10px;
    top: 5px;
    background: transparent;
}

.select-wrapper::before {
    content: "";
    position: absolute;
    border-radius: 4px;
    width: 26px;
    height: 28px;
    right: 1px;
    top: 0px;
    background: transparent;
    z-index: 1;
}

.content-middle-wrap {
    width: 100%;
}

.gx-left-content>h1 {
    font-family: Roboto !important ;;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 20px;
}

.relevance-filter {
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
}

.puppy-nav .checkbox-item label:after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 4px;
    opacity: 0;
    position: absolute;
    top: 5px;
    transform: rotate(-55deg);
    width: 12px;
}

.hidden {
    display: none !important;
}

.product-item.product .wrap .details div.price .product-range-price>div.product-tags-wrapper {
    height: 68px !important;
}

.select-label {
    line-height: 39px;
    font-family: Roboto !important ;;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
}

.gx-sort {
    height: 40px;
    font-family: Helvetica;
    font-size: 16px;
    line-height: 18px;
    width: 250px;
    background: #FFFFFF;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
}

.gx-col-flex-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

@media screen and (max-width: 960px) {
    .relevance-filter {
        flex-direction: column !important;
    }

    .gx-table {
        -webkit-transform-origin: 0;
        transform-origin: top;

        /*transform: scale(0.95);*/
    }
}

@media screen and (max-width: 768px) {

    /*.gx-table {
        -webkit-transform-origin: 0;
        transform-origin: top;

        transform: scale(0.80);
    }*/
    .puppy-nav-list {
        display: none;
    }

    .guide-items>h3 {
        margin: 0 !important;
    }
}

@media screen and (max-width: 690px) {
    /*.gx-table {
        -webkit-transform-origin: 0;
        transform-origin: top;

        transform: scale(0.80);
    }*/
}

@media screen and (max-width: 600px) {
    .guide-content-wrap {
        flex-direction: column;
    }

    .gx-table td,
    .gx-table th {
        text-align: left;
        padding: 8px;
    }

    .gx-left-content>h1 {
        font-size: 30px;
        line-height: 39px;
    }

    .gx-table {
        /* -webkit-transform-origin: 0;
        transform-origin: top;

        transform: scale(0.70); */
    }

}

@media screen and (max-width: 552px) {
    .gx-table {
        /* -webkit-transform-origin: 0;
        transform-origin: top;

        transform: scale(0.60); */
    }

    .gx-table td,
    .gx-table th {
        text-align: left;
        padding: 5px;
    }
}

@media screen and (max-width: 458px) {
    .gx-table {
        /* -webkit-transform-origin: 0;
        transform-origin: top;

        transform: scale(0.55); */
    }

    .gx-table td,
    .gx-table th {
        text-align: left;
        padding: 4px;
    }
}

@media screen and (max-width: 390px) {
    .gx-table {
        /* transform: scale(0.45); */
    }

    .gx-table td,
    .gx-table th {
        text-align: left;
        padding: 4px;
    }
}

@media screen and (max-width: 350px) {
    .gx-table {
        /* -webkit-transform-origin: 0;
        transform-origin: top;

        transform: scale(0.40); */
    }

    .gx-table td,
    .gx-table th {
        text-align: left;
        padding: 2px;
    }
}


@media screen and (min-width: 601px) {
    .gx-left-content>h1 {
        font-size: 50px;
        line-height: 52px;
    }

    .guide-content-wrap {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .left-wrapper {
        padding-top: 20px;
    }
    .puppy-content{
        margin-right: 20px;
    }
}
</style>`);