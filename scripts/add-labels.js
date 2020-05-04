/*
Purpose of this file is to automatically create useful labels for any projects to use.
To use:
1. Go to https://github.com/user/repo/labels
2. Open the Console Dev Tool
3. Paste the following script and hit enter
 */
[{
        "name": "type: help needed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "good first issue",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: documentation",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: chore",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "priority: critical",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "priority: high",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "priority: low",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "priority: medium",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "status: complete",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "status: confirmed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "status: feedback needed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "status: in progress",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "status: on hold",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "status: review needed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: bug",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: enhancement",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: feature",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: idea",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: question",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: story",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: epic",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: task",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "type: sub-task",
        "color": Math.floor(Math.random()*16777215).toString(16)
    }
].forEach(function (label) {
    addLabel(label)
})

function updateLabel(label) {
    var flag = false;
    [].slice.call(document.querySelectorAll(".labels-list-item"))
        .forEach(function (element) {
            if (element.querySelector('.label-link').textContent.trim() === label.name) {
                flag = true
                element.querySelector('.js-edit-label').click()
                element.querySelector('.js-new-label-name-input').value = label.name
                element.querySelector('.js-new-label-color-input').value = '#' + label.color
                element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
            }
        })
    return flag
}

function addNewLabel(label) {
    document.querySelector('.js-new-label-name-input').value = label.name
    document.querySelector('.js-new-label-color-input').value = '#' + label.color
    document.querySelector('.js-details-target ~ .btn-primary').disabled = false
    document.querySelector('.js-details-target ~ .btn-primary').click()
}

function addLabel(label) {
    if (!updateLabel(label)) addNewLabel(label)
}
