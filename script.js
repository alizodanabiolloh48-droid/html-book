document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cardsContainer");
    const searchInput = document.getElementById("searchInput");
    
    const socialToggle = document.getElementById("socialToggle");
    const socialDropdown = document.getElementById("socialDropdown");
    
    const categoryToggle = document.getElementById("categoryToggle");
    const categoryDropdown = document.getElementById("categoryDropdown");
    
    const catButtons = document.querySelectorAll(".cat-btn");

    let currentCategory = "all";

    // Пӯшидан ва кушодани менюи сайтҳо (чап)
    socialToggle.addEventListener("click", () => {
        categoryDropdown.classList.remove("show"); // пӯшидани менюи дигар
        socialDropdown.classList.toggle("show");
    });

    // Пӯшидан ва кушодани менюи категорияҳо (рост)
    categoryToggle.addEventListener("click", () => {
        socialDropdown.classList.remove("show"); // пӯшидани менюи дигар
        categoryDropdown.classList.toggle("show");
    });

    // Рандари кортҳо
    function renderCards(data) {
        cardsContainer.innerHTML = "";

        if (data.length === 0) {
            cardsContainer.innerHTML = "<p style='text-align:center;'>Ҳеҷ чиз ёфт нашуд.</p>";
            return;
        }

        data.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <div class="card-category">${item.category}</div>
                <h2 class="card-title">${escapeHTML(item.title)}</h2>
                <div class="card-type">${item.type}</div>
                
                <div class="card-section">
                    <strong>📖 Маълумот:</strong>
                    <p>${item.info}</p>
                </div>
                
                <div class="card-section">
                    <strong>💡 Чаро истифода мешавад:</strong>
                    <p>${item.why}</p>
                </div>
                
                <div class="card-section">
                    <strong>💻 Мисол:</strong>
                    <div class="code-box">${escapeHTML(item.example)}</div>
                </div>
            `;

            cardsContainer.appendChild(card);
        });
    }

    // Экранизатсияи коди HTML
    function escapeHTML(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // Филтратсия
    function filterData() {
        const query = searchInput.value.toLowerCase();

        const filtered = bookData.filter(item => {
            const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
            const matchesSearch = item.title.toLowerCase().includes(query) || 
                                  item.info.toLowerCase().includes(query);
            return matchesCategory && matchesSearch;
        });

        renderCards(filtered);
    }

    // Инхоби категория
    catButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            catButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentCategory = btn.getAttribute("data-category");
            filterData();
            
            // Баъди интихоб менюро мепӯшем
            categoryDropdown.classList.remove("show");
        });
    });

    // Ҷустуҷӯ
    searchInput.addEventListener("input", filterData);

    // Оғози аввала
    renderCards(bookData);
});
