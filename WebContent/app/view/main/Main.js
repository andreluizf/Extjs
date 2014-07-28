/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('MyApp.view.main.Main', {
	extend : 'Ext.container.Container',

	xtype : 'app-main',
	requires: [
	           'Ext.toolbar.TextItem',
	           'Ext.view.View',
	           'Ext.ux.DataView.Animated'
	       ],

	controller : 'main',
	viewModel : {
		type : 'main'
	},

	layout : {
		type : 'border'

	},

	items : [ {
		region : 'north',
		xtype : 'component',
		padding : 10,
		cls : 'appBanner',
		height : 40,
		html : 'My Company - My Company Motto'
	}, {
		xtype : 'panel',
		title : 'Navigation',
		region : 'west',
		html : '<ul><li>This area ...</li></ul>',
		width : 250,
		split : true,
		collapsible : true,
		collapsed : true,
		tbar : [ {
			text : 'Button',
			handler : 'onClickButton'
		} ]
	}, {
		region : 'center',
		xtype : 'tabpanel',
		id : 'tabs',
		items : [ {
			title : 'Tab 1',
			bodyPadding : 20,
			cls : 'content-panel-body',
			items : [ {
				xtype : 'container',
				layout : {
					type : 'table',
					columns : 12,
					tdAttrs : {
						style : 'padding: 5px 10px;text-alig:center'
					}
				},
				defaults : {
					href : 'http://www.sencha.com/'
				},

				items : [ {
//					xtype : 'button',
//
//					icon : null,
//					cls : 'thumbnail-icon-wrap icon-border-circle',
//					style : {
//						background : 'none',
//						border : 'none',
//						width : '100px',
//						height : '100px'
//					},
//					scale : 'large',
//					glyph : 72
//				},				{
				
					bodyPadding : 20,
					html :  '<a href="http://www.sencha.com/" style="text-decoration:none"><div class="thumbnail-icon-wrap icon-border-circle"><div class="thumbnail-icon icon-grouped-header-grid"></div><h3>novo</h3></div></a>'
//					xtype: 'dataview',
//					 tpl: [
//			                '<tpl for=".">',
//			                    '<div class="dataview-multisort-item">',
//			                        '<img src="resources/images/touch-icons/{thumb}" />',
//			                        '<h3>{name}</h3>',
//			                    '</div>',
//			                '</tpl>'
//			            ],
//			            plugins: {
//			                xclass: 'Ext.ux.DataView.Animated'
//			            },
//			            itemSelector: 'div.dataview-multisort-item',
//		            store: Ext.create('Ext.data.Store', {
//		                autoLoad: true,
//		                sortOnLoad: true,
//		                fields: ['name', 'thumb', 'url', 'type'],
//		                proxy: {
//		                    type: 'ajax',
//		                    url : 'data.json',
//		                    reader: {
//		                        type: 'json',
//		                        rootProperty: ''
//		                    }
//		                }
//		            })
				} ]

			} ]
		}, {
			title : 'The Data',
			layout : 'fit',
			items : [ {
				xtype : 'grid',
				title : 'Simpsons',
				store : {
					fields : [ 'name', 'email', 'phone' ],
					data : [ {
						name : 'Lisa',
						email : "lisa@simpsons.com",
						phone : "555-111-1224"
					}, {
						name : 'Bart',
						email : "bart@simpsons.com",
						phone : "555-222-1234"
					}, {
						name : 'Homer',
						email : "home@simpsons.com",
						phone : "555-222-1244"
					}, {
						name : 'Marge',
						email : "marge@simpsons.com",
						phone : "555-222-1254"
					} ],
					proxy : {
						type : 'memory'
					}
				},
				columns : [ {
					text : 'Name',
					dataIndex : 'name'
				}, {
					text : 'Email',
					dataIndex : 'email',
					flex : 1
				}, {
					text : 'Phone',
					dataIndex : 'phone'
				} ]
			} ]
		} ],
		dockedItems : {
			dock : 'bottom',
			xtype : 'toolbar',
			items : [ {
				text : 'Add a Tab',
				glyph : 43,
				listeners : {
					click : 'onAddTabClick'
				}
			} ]
		}
	} ]
});
