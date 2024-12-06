
const rules = [
	{
		id: 1,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ {
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Referer',
				value: 'https://data.shom.fr/',
			}, ]
		},
		condition: {
			urlFilter: 'https://services.data.shom.fr/*',
			resourceTypes: ["image"],
		}
	}, {
		id: 2,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ {
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Referer',
				value: 'https://www.c-map.com/',
			}, ]
		},
		condition: {
			urlFilter: 'https://tiles.c-map.com/*',
			resourceTypes: ["image"],
		}
	}, {
		id: 3,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ {
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Referer',
				value: 'https://www.openstreetmap.org/',
			}, ]
		},
		condition: {
			urlFilter: 'https://tile.tracestrack.com/*',
			resourceTypes: ["image"],
		}
	}, {
		id: 4,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ {
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Referer',
				value: 'https://www.geoportail.gouv.fr/',
			}, ]
		},
		condition: {
			urlFilter: 'https://data.geopf.fr/*',
			resourceTypes: ["image"],
		}
	}, {
		id: 5,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ {
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Referer',
				value: 'https://maps.garmin.com/',
			}, 
			{
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Origin',
				value: 'https://maps.garmin.com',
			},
			]
		},
		condition: {
			urlFilter: 'https://tile*.navionics.com/*',
			resourceTypes: ["image", "xmlhttprequest"],
		}
	}, {
		id: 6,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ 
			{
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Referer',
				value: 'https://maps.garmin.com/',
			}, 
			{
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'Origin',
				value: 'https://maps.garmin.com',
			},
			{
				operation: chrome.declarativeNetRequest.HeaderOperation.SET,
				header: 'X-Api-Key',
				value: '0E0223B5-F24A-4494-9A60-A969CDE7FFAF',
			},
			]
		},
		condition: {
			urlFilter: 'https://mcv*garmin.com/*',
			resourceTypes: ["image", "xmlhttprequest"],
		}
	},
];



chrome.declarativeNetRequest.updateDynamicRules({
	removeRuleIds: [1, 2, 3, 4, 5, 6, ],
	addRules: rules
});


/*
	}, {
		id: 3,
		priority: 1,
		action: {
			type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
			requestHeaders: [ {
				operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
				header: 'Cookie',
			}, ]
		},
		condition: {
			urlFilter: 'https://backend.navionics.com/*',
			resourceTypes: ["image"],
		}
*/