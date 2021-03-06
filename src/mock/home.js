const Mock = require('mockjs')
/**
 * @desc 处理获取 数据
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
 const getProductList = (request, response) => {
  let list = [
    {
      "base_info": {
        "product_name": "进口花伴手礼小花束",
        "publish_status": "1",
        "summary": "进口花伴手礼小花束",
        "product_type": 2,
        "stock": 99996,
        "sale": 7,
        "sale_price": 25800,
        "format_sale_price": "258.00",
        "original_price": 29800,
        "format_original_price": "298.00",
        "shipping_price": 0,
        "format_shipping_price": "0.00",
        "updated_timestamp": null,
        "created_timestamp": 1610858927,
        "item_id": 378,
        "sku_id": 0,
        "sort": 37,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      },
      "specifications": null,
      "galley_image_list": null,
      "brand_story": null,
      "care_instructions": null,
      "special_note": null,
      "logistics_desc": null,
      "after_sale_instructions": null,
      "purchase_note": null,
      "detail": null
    }, {
    "base_info": {
      "product_name": "年宵花水泥盆蝴蝶兰设计",
      "publish_status": "1",
      "summary": "年宵花水泥盆蝴蝶兰设计",
      "product_type": 2,
      "stock": 99997,
      "sale": 4,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612086744,
      "item_id": 393,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7f0008089c9174ee43c81af2a25ce788.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "紫色恋人",
      "publish_status": "1",
      "summary": "紫色恋人",
      "product_type": 2,
      "stock": 99999,
      "sale": 14,
      "sale_price": 128000,
      "format_sale_price": "1280.00",
      "original_price": 158000,
      "format_original_price": "1580.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085138,
      "item_id": 388,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/2b758d13177021042ea23a60393a36d4.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "情人节圆筒礼盒",
      "publish_status": "1",
      "summary": "情人节圆筒礼盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 13,
      "sale_price": 39800,
      "format_sale_price": "398.00",
      "original_price": 52000,
      "format_original_price": "520.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611829185,
      "item_id": 387,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/4d76f0d2d283c8ffdd6c7da7f6a8e4c0.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "巨型亚克力枪炮礼盒",
      "publish_status": "1",
      "summary": "巨型亚克力枪炮礼盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 12,
      "sale_price": 158000,
      "format_sale_price": "1580.00",
      "original_price": 188000,
      "format_original_price": "1880.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611828887,
      "item_id": 386,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7a2bf6c3bea5d13809630bdb11a2534f.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "透视亚克力a级玫瑰花盒",
      "publish_status": "1",
      "summary": "透视亚克力a级玫瑰花盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 11,
      "sale_price": 39800,
      "format_sale_price": "398.00",
      "original_price": 52000,
      "format_original_price": "520.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611827886,
      "item_id": 385,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/95f27ba930360fc394c32f1491c94b74.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }
  ]

  let result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "product_list": list,
      "page_info": {
        "page_size": 10,
        "index": 1,
        "has_more": true,
        "count": 10
      }
    },
    "success": true
  }
  response.json(result)
}
/**
 * @desc 使用mock模拟数据
 * @param {*} request 
 * @param {*} response 
 */
const getMockList = (request, response) => {
  const result = {
    errorCode: 0,
    errorMessage: 'success', 
    data: Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'date': Mock.Random.date(),
          'name': Mock.Random.cname(),
          'desc': Mock.Random.cparagraph()
      }]
  })
  }
  response.json(result)
}
// home Mock api
const HomeMockApi = (app) => {
  app.post('/product/getProductList', getProductList)
  // 使用mockjs模拟数据
  app.post('/mock/data/getMockList', getMockList)
}

// 导出路由
module.exports = HomeMockApi