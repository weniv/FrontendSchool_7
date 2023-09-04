class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.cola-list');
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData() {

        try {
            const response = await fetch('./items.json');

            if (!response.ok) {
                throw new Error('HTTP ERROR!! :' + response.status);
            }
            return await response.json();
        } catch (error) {
            console.error('콜라데이터를 로딩하는중에 문제가 발생했습니다. :' + error);
        }
    }

    // <li>
    //       <!-- JS : 클래스 on 유/무 제어 -->
    //           <button type="button" class="btn-cola on">
    //     <img src="./img/cola-original.png" alt="" />
    //     <span class="cola-name">Original_Cola</span>
    //     <strong class="cola-price">1000원</strong>
    // </button>
    //     </li>

    colaFactory(data) {
        const docFrag = new DocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `<button type="button" class="btn-cola on">
            <img src="./img/cola-original.png" alt="" />
            <span class="cola-name">Original_Cola</span>
            <strong class="cola-price">1000원</strong>
          </button>`;
            item.innerHTML = itemTemplate;
            docFrag.append(item);
        });

        this.itemList.append(docFrag);
    }
}


export default ColaGenerator;