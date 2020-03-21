/* 
Purpose of this file is to automatically create useful labels for any projects to use.
To use:
1. Go to https://github.com/user/repo/labels
2. Open the Console Dev Tool
3. Paste the following script and hit enter
 */
[{
        "name": "Type: Help Needed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Priority: Critical",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Priority: High",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Priority: Low",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Priority: Medium",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Status: Complete",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Status: Confirmed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Status: Feedback Needed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Status: In Progress",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Status: On Hold",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Status: Review Needed",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Bug",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Enhancement",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Feature",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Idea",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Question",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Story",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },    
    {
        "name": "Type: Epic",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Task",
        "color": Math.floor(Math.random()*16777215).toString(16)
    },
    {
        "name": "Type: Sub-task",
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