function renderURL(v) {
    let url = ''
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        url = v
    } else {
        url = '/placemaking-marathon' + v
    }

    return url.replace(' ', '')
    
}

function processCityName(name, type="link") {
    switch(type) {
        case 'link':
            return name.replace(' ', '_')
        case 'display':
            return name.replace('_', ' ')
    }
}

export {renderURL, processCityName}
