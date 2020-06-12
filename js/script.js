function showModal(img = null, title = null, text = null, url = null) {
    $modal = $(`
    <div class="modal is-active">
    <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">${title || "Untitled"}</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <img src="${img}">
                <p>${text || "No description."}</p>
            </section>
            <footer class="modal-card-foot is-centered has-text-centered">
                <a href="${url || "#"}" class="button">Visit</a>
            </footer>
        </div>
    </div>
    `);
    $("body").append($modal);
    return $modal;
}

function quitModal($modal) {
    const closes = [$modal.find('.modal-background'), $modal.find('.modal-close'), $modal.find('.delete')];

    const quit = function () {
        closes.forEach(c => c.unbind('click', quit));
        $modal.remove();
    }

    closes.forEach(c => c.bind('click', quit));
}

$(function () {

    $(".preview").each(function () {
        $(this).click(function () {
            $parent = $(this).parents(".box");

            const img = $(this).attr('src');
            const url = $parent.find('a').attr('href');
            const title = $parent.find('a').html();
            const desc = $parent.find('desc').html();

            const $modal = showModal(img, title, desc, url);
            setTimeout(() => quitModal($modal));
        });
    });

});