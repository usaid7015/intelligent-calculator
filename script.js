function intelligenceName() {
    let intelligenceLevels = [
        "smart",
        "multitalented",
        "mastermind",
        "dumb",
        "einstein",
        "intelligent",
        "awesome",
        "genius",
        "good person",
    ]

    let name = document.querySelector("input").value;
    let randomindex = parseInt(Math.random() * intelligenceLevels.length);
    alert(intelligenceLevels[randomindex]);

}

