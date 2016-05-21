<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// 微笑抽奖活动页面
class Wxcj extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->helper('url_helper');
    }

	// 摇一摇抽奖页
	public function index() {
		
		// $data['news'] = $this->news_model->get_news();

		$data['title'] = '微笑摇奖';
		$this->load->view('wxcj/index', $data);
	}

	// 模拟ajax
	public function aa() {
		$data['news_item'] = $this->news_model->get_news();
		echo json_encode($data);
	}

	public function bb() {
		$this->news_model->set_news();
	}

	// 拆红包页
	public function open() {
		$data['title'] = '打开红包';
		$this->load->view('wxcj/open', $data);
	}

	// 规则说明页
	public function desc() {
		$data['title'] = '活动规则';
		$this->load->view('wxcj/desc', $data);
	}

	// 中奖页
	public function award() {
		$data['title'] = '兑奖';
		$data['award'] = '30元手机充值卡';
		$data['isAddress'] = true;	//若是奖品需要显示地址
		$this->load->view('wxcj/award', $data);
	}

	// 未中奖页
	public function noAward() {
		$data['title'] = '未中奖';
		$this->load->view('wxcj/noAward', $data);
	}
}
